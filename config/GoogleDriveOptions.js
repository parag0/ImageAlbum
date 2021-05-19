const { google } = require('googleapis');

const drive = google.drive('v3');

/**
 * @description Initialize jwtToken and Google Drive Obj
 * @returns jwtClient
 * @returns driveObj
 */
class GoogleDriveOptions {
  targetFolderId = '1qc3VAKWv3WihWPxkQtXRwpIuA1je86ZO';

  jwtToken;

  constructor() {
    console.time('Initializing JWT Authentication');
    this.driveObj = drive;

    const jwtClient = new google.auth.JWT(
      process.env.SERVICE_ACCOUNT_EMAIL,
      null,
      process.env.PRIVATE_KEY,
      ['https://www.googleapis.com/auth/drive'],
      null,
    // eslint-disable-next-line no-unused-vars
    ).authorize((err, tokens) => {
      if (err) {
        throw Error('Failed to initiate JWT Authentication');
      }
      console.timeEnd('Initializing JWT Authentication');
      this.jwtToken = jwtClient;
    });
  }

  static async listFiles() {
    try {
      const fileList = await drive.files.list({
        auth: this.jwtToken,
        pageSize: 3,
        q: `mimeType contains 'image/' and '${this.targetFolderId}' in parents`,
      });
      return fileList;
    } catch (error) {
      console.log('Error Fetching File:', error.message);
      return error.message;
    }
  }
}

module.exports = GoogleDriveOptions;

// const googleDriveAuth = require('../config/googleDriveAuth');
const { google } = require('googleapis');

module.exports.test = async (query) => {
  try {
    google.options({
      headers: { referer: 'https://node-image-viewer.herokuapp.com' },
    });

    const drive = google.drive({
      version: 'v3',
      auth: process.env.GDRIVE_API_KEY,
    });

    const params = { pageSize: 3 };
    params.q = query;
    const res = await drive.files.list(params);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log('Error', error);
    throw error;
  }
};

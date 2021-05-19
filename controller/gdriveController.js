const GoogleDriveOptions = require('../config/GoogleDriveOptions');

module.exports.test = async () => {
  try {
    // const auth = await this.authorizeJWT();
    const resp = await GoogleDriveOptions.listFiles();
    console.log('\n', 'Resp', resp.data, '\n');
    return resp;
  } catch (error) {
    console.log('Error', error);
    throw error;
  }
};

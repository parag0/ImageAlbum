const googleDriveAuth = require('../config/googleDriveAuth');

module.exports.test = async () => {
  try {
    console.log('test', googleDriveAuth);
  } catch (error) {
    console.log('Error', error);
  }
};

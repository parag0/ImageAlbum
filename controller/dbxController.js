const dbx = require('../config/dropBoxAuth');
const dbxInstance = new dbx();
const loggerInstance = require('../config/logger');
const infoLoggerInstance = loggerInstance.infoLogger();
const errorLoggerInstance = loggerInstance.errorLogger();

function dbxTest(req, res, next) {
	dbxInstance.filesListFolder({ path: '' }).then(function (response) {
		console.log(response);
		infoLoggerInstance.info(response);
	}).catch(function (error) {
		console.log(error);
		errorLoggerInstance.error(error)
	});
}

module.exports = {
	dbxTest
}
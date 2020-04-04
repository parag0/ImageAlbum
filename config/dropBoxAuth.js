var fetchObj = require('isomorphic-fetch');
var dbx1 = require('dropbox').Dropbox;
const loggerInstance = require('./logger');
const infoLoggerInstance = loggerInstance.infoLogger();

var dbxInstance = null;

class DropBoxAuth {
	constructor() {
		let appAccessToken = process.env.DROPBOX_ACCESS_TOKEN;
		if (!dbxInstance) {
			// dbxInstance = dbx1.Dropbox({ accessToken: this.appAccessToken });
			infoLoggerInstance.info(`dbxInstance Access Token ${appAccessToken}`);
			dbxInstance = new dbx1({ accessToken: appAccessToken, fetch: fetchObj });
		}
		return dbxInstance;
	}
}

module.exports = DropBoxAuth
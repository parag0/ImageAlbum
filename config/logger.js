var winston = require('winston');

class Logger {
    constructor() {
        if (!!Logger.instance) {
            return Logger.instance;
        }
        Logger.instance = this;
        // return this;
    }

    infoLogger() {
        var INFOlogger = winston.createLogger({
            level: process.env.logLevel || 'error',
            transports: [
                new winston.transports.Console(),
                new winston.transports.File({
                    filename: './logs/info.log',
                    level: 'info'
                })
            ]
        });
        return INFOlogger;
    }

    errorLogger() {
        var ERRORlogger = winston.createLogger({
            level: process.env.logLevel || 'error',
            transports: [
                new winston.transports.Console(),
                new winston.transports.File({
                    filename: './logs/error.log',
                    level: 'error'
                })
            ]
        });
        return ERRORlogger;
    }
}

const loggerInstance = new Logger();
Object.freeze(loggerInstance);

module.exports = loggerInstance;
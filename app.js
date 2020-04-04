require('dotenv').config();
var express = require('express');
var path = require('path');
const loggerInstance = require('./config/logger');
var indexRouter = require('./routes/index');

const infoLoggerInstance = loggerInstance.infoLogger();
const SERVER_PORT = process.env.SERVER_PORT || 3000


var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//Router Setup
app.use('/', indexRouter);

app.listen(SERVER_PORT, () => {
	console.log(`Server is running on port ${SERVER_PORT}.`)
	infoLoggerInstance.info(`Server is running on port ${SERVER_PORT}.`);
});

module.exports = app;
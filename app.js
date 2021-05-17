require('dotenv').config();
const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');

const SERVER_PORT = process.env.SERVER_PORT || 3000;

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Router Setup
app.use('/', indexRouter);

app.listen(SERVER_PORT, () => {
  console.log(`Server is running on port ${SERVER_PORT}.`);
});

module.exports = app;

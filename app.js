require('dotenv').config();
const express = require('express');
const GoogleDriveOptions = require('./config/GoogleDriveOptions');
const indexRouter = require('./routes/index');

const SERVER_PORT = process.env.PORT || 5000;

const app = express();
// eslint-disable-next-line no-unused-vars
const gdriveObj = new GoogleDriveOptions();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Router Setup
app.use('/', indexRouter);

app.listen(SERVER_PORT, () => {
  console.log(`Server is running on port ${SERVER_PORT}.`);
});

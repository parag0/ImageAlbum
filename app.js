require('dotenv').config();
const express = require('express');
const indexRouter = require('./routes/index');

const SERVER_PORT = process.env.HEROKU_SERVER_PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Router Setup
app.use('/', indexRouter);

app.listen(SERVER_PORT, () => {
  console.log(`Server is running on port ${SERVER_PORT}.`);
});

const express = require('express');

const router = express.Router();
const gdriveController = require('../controller/gdriveController');

/* GET home page. */
router.get('/', (req, res) => {
  res.send(`App is running ${process.env.HEROKU_SERVER_PORT}`);
});

router.get('/test', gdriveController.test);

module.exports = router;

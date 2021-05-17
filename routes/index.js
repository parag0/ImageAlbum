const express = require('express');

const router = express.Router();
const gdriveController = require('../controller/gdriveController');

/* GET home page. */
router.get('/', (req, res) => {
  res.send(`Server is running on port ${process.env.HEROKU_SERVER_PORT}`);
});

router.get('/test', gdriveController.test);

module.exports = router;

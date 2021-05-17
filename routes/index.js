const express = require('express');

const router = express.Router();
const gdriveController = require('../controller/gdriveController');

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

router.get('/test', gdriveController.dbxTest);

module.exports = router;

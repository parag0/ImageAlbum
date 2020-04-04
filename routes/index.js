var express = require('express');
var router = express.Router();
var dbxController = require('../controller/dbxController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', dbxController.dbxTest);

module.exports = router;

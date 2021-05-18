const express = require('express');

const router = express.Router();
const gdriveController = require('../controller/gdriveController');

/* GET home page. */
router.get('/', (req, res) => {
  res.send(`Server is running on port ${process.env.PORT}`);
});

router.get('/test', (req, res) => {
  const data = gdriveController.test(req.query.q);
  res.status(200).send(data);
});

module.exports = router;

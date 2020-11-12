var express = require('express');
var router = express.Router();

var http = require('http');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.headers['x-forwarded-for'])
  res.render('index', { title: 'Express' });
});

router.get('/logging/open', function (req, res, next) {
  console.log(req);
});

module.exports = router;

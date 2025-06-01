var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.send('关于 拾光纪：这是我的个人网站。');
});

/* GET blog page. */
router.get('/blog', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/blog.html'));
});

/* GET tools page. */
router.get('/tools', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/tools.html'));
});

module.exports = router;

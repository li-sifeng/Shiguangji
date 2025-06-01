var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/about.html'));
});

/* GET blog page. */
router.get('/blog', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/blog.html'));
});

/* GET tools page. */
router.get('/tools', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/tools.html'));
});

/* GET idphoto page. */
router.get('/idphoto', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/idphoto.html'));
});

/* GET game page. */
router.get('/game', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/game.html'));
});

module.exports = router;

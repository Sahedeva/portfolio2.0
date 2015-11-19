var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Bob's Portfolio" });
});

router.get('/about', function(req, res, next){
	res.render('about', { title: "Bob's Portfolio" });
});

module.exports = router;

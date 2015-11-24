var express = require('express');
var router = express.Router();
// var User = require('../models/user'); // get our mongoose model
// var Artwork = require('../models/artwork');
// var Project = require('../models/project');
var mongoose = require('mongoose');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Bob's Portfolio" });
});

router.get('/about', function(req, res, next){
	res.render('about', { title: "Bob's Portfolio" });
});

module.exports = router;

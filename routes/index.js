var express = require('express');
var router = express.Router();
var User = require('../models/user'); // get our mongoose model
var Artwork = require('../models/artwork');
var Project = require('../models/project');
var mongoose = require('mongoose');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Bob's Portfolio" });
});

router.get('/about', function(req, res, next){
	res.render('about', { title: "Bob's Portfolio" });
});

// Index route for artworks
router.get('/artworks', function(req, res, next){
	Artwork.find({}, function(err, artworks){
		console.log("This is the result of Artwork.find: "+artworks);
		console.log("This is artworks[0]:"+artworks[0]);
		res.json(artworks);
	});
});

//post route to seed database (once executed will not be needed again)
router.post('/new_artwork', function(req,res,next){
	Artwork.find({}, function(err, artwork){
		for (i=1;i<80;i++) {
			console.log(i);
			var url = '/images/Artwork/IMG_'+i+".jpg";
			Artwork.collection.insert({url: url, likes: 0, genre: "Pastel"});
		}
		res.redirect('/');
	});
});


module.exports = router;

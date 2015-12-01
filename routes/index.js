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

// router.get('/about', function(req, res, next){
// 	res.render('about', { title: "Bob's Portfolio" });
// });

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
			Artwork.collection.insert({url: url, likes: 0, genre: "Pastel Work", comments: []});
		}
		res.redirect('/');
	});
});

/* Show route */
// router.get('/artworks/:artwork', function(req, res, next) {
// 	req.artwork.populate('comments', function(err, artwork) {
// 		if (err) { return next(err); }

// 		res.json(artwork);
// 	});
// });
/* Trying to see what is happening */
router.put('/testing_like', function(req, res, next){
	console.log("got here");
	res.json({response: "working route"});
});
/* Like route */
router.put('/artworks/:artwork/like', function(req, res, next) {
	console.log("Artworks like got here");
	var likes = req.artwork.likes;
	likes += 1;
	var artwork_id = req.artwork._id;
	console.log ("Updated likes is " + likes + " and the id is " + artwork_id);
	Artwork.findOneAndUpdate({'_id': artwork_id}, {likes: likes}, {new: true}, function(err, artwork) {
      res.json({
              success: true,
              message: 'Artwork likes has been incremented by one in the database.'
              });
      if (err) {
        console.log('got an error');
      }
    });
});

/* Add comment route */
router.post('/artworks/:artwork/comments', function(req, res, next) {
  var comment = req.body.comment;
  var artwork_id = req.artwork._id;
  Artwork.findById(artwork_id, function(err, artwork){
  	Artwork.update({_id: artwork._id}, {$push: {"comments": comment}}, function(err, artwork){
  		res.json({
  						success: true,
  						message: 'Comments have been updated in the database.'
  		});
  		if (err) {
  			console.log('got an error');
  		}
  	});
  });
 //  Artwork.findOne({'_id': artwork_id}, function(err, artwork){
 //  	var current_comments = artwork.comments;
 //  	console.log("Comment is " + comment + " Art Id is " + artwork_id + " Comments are " + current_comments);
 //  	var comments = current_comments.push(comment);
 //  	console.log("this is comments after push (should be an array): "+comments);
	//   Artwork.findOneAndUpdate({'_id': artwork_id}, {comments: [comments]}, {new: true}, function(err, artwork) {
	//       res.json({
	//               success: true,
	//               message: 'Comments have been updated in the database.'
	//               });
	//       if (err) {
	//         console.log('got an error');
	//       }
	//     });
	// });
});
/* Params for id */
router.param('artwork', function(req, res, next, id) {
	var query = Artwork.findById(id);
	query.exec(function (err, artwork){
		if (err) { return next(err); }
		if (!artwork) { return next(new Error('can\'t find artwork')); }

		req.artwork = artwork;
		return next();
	});
});


module.exports = router;

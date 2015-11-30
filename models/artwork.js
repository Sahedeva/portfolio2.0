var mongoose = require('mongoose');

var artworkSchema = new mongoose.Schema({
  url: String,
  likes: Number,
  genre: String,
  comments: Array,
  created_at: Date,
  updated_at: Date
});

var Artwork = mongoose.model('Artwork', artworkSchema);

// Make this available to our other files
module.exports = Artwork;
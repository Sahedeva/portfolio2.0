var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  artwork_like: Array,
  project_like: Array,
  relate: Boolean,
  scared: Boolean,
  travel: Boolean,
  good_great: Boolean,
  comment: String,
  created_at: Date,
  updated_at: Date
});

var User = mongoose.model('User', userSchema);

// Make this available to our other files
module.exports = User;
var mongoose = require('mongoose');

var projectSchema = new mongoose.Schema({
  href: String,
  src: String,
  like: Number,
  created_at: Date,
  updated_at: Date
});

var Project = mongoose.model('Project', projectSchema);

// Make this available to our other files
module.exports = Project;

// Model for the property collection.
const mongoose = require('mongoose');

// Define the schema
const Property = new mongoose.Schema({
  _id: String,
  title: String,
  description: String,
  prereqs: [String]
});

// Export the model
module.exports = mongoose.model('Course', Course);

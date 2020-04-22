
// Model for the property collection.
const mongoose = require('mongoose');

// Define the schema
const Property = new mongoose.Schema({
  user: String,
  address: String
});

// Export the model
module.exports = mongoose.model('Property', Property);

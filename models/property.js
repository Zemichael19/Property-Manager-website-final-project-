
// Model for the property collection.
const mongoose = require('mongoose');

// Define the schema
const Property = new mongoose.Schema({
  id_: String,
  address: String,
  n_apart: Number,
});

// Export the model
module.exports = mongoose.model('Property', Property);

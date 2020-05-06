
// Model for the property collection.
const mongoose = require('mongoose');

// Define the schema
const Property = new mongoose.Schema({
  user: {type: String, required:true, maxlength: 100, trim: true},
  address: {type: String, maxlength: 100, trim: true},
  name: {type: String, maxlength: 30, trim: true}
});

// Export the model
module.exports = mongoose.model('Property', Property);

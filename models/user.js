
// Model for the property collection.
const mongoose = require('mongoose');

// Define the schema
const User = new mongoose.Schema({
  name: String,
  e_mail: String
});

// Export the model
module.exports = mongoose.model('User', User);

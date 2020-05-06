
// Model for the property collection.
const mongoose = require('mongoose');

// Define the schema
const User = new mongoose.Schema({
  _id: {type: String, required: true,minlength:5, maxlength: 100},
  name:{type: String, required: true,minlength:5, maxlength: 100}
});

// Export the model
module.exports = mongoose.model('User', User);

// Model for the course collection.
const mongoose = require('mongoose');

// Define the schema
const Apartment = new mongoose.Schema({
  _id: String,
  title: String,
  description: String,
  prereqs: [String]
});

// Export the model
module.exports = mongoose.model('Apartment', Apartment);

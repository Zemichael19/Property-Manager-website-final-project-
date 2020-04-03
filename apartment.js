// Model for the course collection.
const mongoose = require('mongoose');

// Define the schema
const Apartment = new mongoose.Schema({
  n_rooms: Number,
  n_bathrooms: Number,
  listed: Boolean,
  furnished: Boolean,
  floor: Number,
  sqFoot: Number,
  













});

// Export the model
module.exports = mongoose.model('Apartment', Apartment);

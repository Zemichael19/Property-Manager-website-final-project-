// Model for the course collection.
const mongoose = require('mongoose');

// Define the schema
const Apartment = new mongoose.Schema({







    pets: Boolean,
    laundry: Boolean,
    parking: Boolean,
    s_date: Date,
    e_date: Date,
    ac: Number,
    u_num: Number
});

// Export the model
module.exports = mongoose.model('Apartment', Apartment);

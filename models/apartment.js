// Model for the apartment collection.
const mongoose = require('mongoose');

// Define the schema
const Apartment = new mongoose.Schema({
    property: {type:mongoose.ObjectId, required: true},
    n_rooms: Number,
    n_bathrooms: Number,
    listed: Boolean,
    furnished:Boolean,
    floor:Number,
    sqFoot:Number,
    pets: Boolean,
    laundry: Boolean,
    parking: Boolean,
    s_date: Date,
    e_date: Date,
    ac: Boolean,
    u_num: {type:Number, required: true}
});

Apartment.path('e_date').set(function(e_date) {
  return new Date(`1/15/2020 ${e_date}`);
});

// Export the model
module.exports = mongoose.model('Apartment', Apartment);

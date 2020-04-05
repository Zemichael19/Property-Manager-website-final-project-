const express = require('express');
const courses = require('./controllers/properties');
const sections = require('./controllers/apartments');

// Create the router
const router = express.Router();

// Handle property requests
router.get('/properties', properties.index);
router.get('/properties/:id', properties.retrieve);

// Handle apartment requests
router.get('/apartments', apartments.index);

// Export the router
module.exports = router;

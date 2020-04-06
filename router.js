const express = require('express');
const properties = require('./controllers/properties');
const apartments = require('./controllers/apartments');

// Create the router
const router = express.Router();

// Handle property requests
router.get('/properties', properties.index);
router.get('/properties/:id', properties.retrieve);

// Handle apartment requests
router.get('/apartments', apartments.index);

// Export the router
module.exports = router;

const express = require('express');
const properties = require('./controllers/properties');
const apartments = require('./controllers/apartments');

// Create the router
const router = express.Router();

// Check for admin status
const authorize = function(request, response, next) {
  if (request.session.admin) {
    next(); // Fulfill the request
  } else {
    response.status(401).end();
  }
};

// Handle property requests
router.get('/properties', properties.index);
router.get('/properties/:id', properties.retrieve);
router.post('/properties', authorize, properties.create);
router.delete('/properties/:id', authorize, properties.delete);
router.put('/properties/:id', authorize, properties.update);

// Handle apartment requests
router.get('/apartments', apartments.index);
router.post('/apartments', authorize, apartments.create);
router.delete('/apartments/:id', authorize, apartments.delete);
router.put('/apartments/:id', authorize, apartments.update);

// Export the router
module.exports = router;

const express = require('express');
const properties = require('./controllers/properties');
const apartments = require('./controllers/apartments');
const users = require('./controllers/users');
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

// Handle home-page requests
router.get('/', function(request, response) {
  response.render('index');
});

// Handle login requests
router.post('/login', users.login);

// Handle logout requests
router.get('/logout', function(request, response) {
  request.session.user = undefined;
  response.redirect('/');
});

router.get('/properties/new', properties.new);

// Handle property requests
router.get('/properties', properties.index);
router.get('/properties/:id', properties.retrieve);

router.post('/properties', authorize, properties.create);
router.delete('/properties/:id', authorize, properties.delete);
router.put('/properties/:id', authorize, properties.update);

// Handle apartment requests
router.get('/apartments', apartments.index);


// Export the router
module.exports = router;

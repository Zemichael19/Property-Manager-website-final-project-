const express = require('express');
const properties = require('./controllers/properties');
const apartments = require('./controllers/apartments');
const users = require('./controllers/users');
// Create the router
const router = express.Router();

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

// Handle property requests
router.get('/properties', properties.index);
router.get('/properties/:id', properties.retrieve);

router.post('/properties', authorize, courses.create);
router.delete('/properties/:id', authorize, courses.delete);
router.put('/properties/:id', authorize, courses.update);

// Handle apartment requests
router.get('/apartments', apartments.index);


// Export the router
module.exports = router;

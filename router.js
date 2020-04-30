const express = require('express');
const properties = require('./controllers/properties');
const apartments = require('./controllers/apartments');
const users = require('./controllers/users');
// Create the router
const router = express.Router();

// Check for admin status
const authorize = function(request, response, next) {
    next(); // Fulfill the request

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

// handle user requests
router.get('/signup', function(request, response) {
  response.render('signup');
});
router.post('/signup', authorize, users.create);

router.get('/properties/new', properties.new);

router.get('/properties/edit', properties.edit);
router.get('/properties/edit/:id', properties.editing);
// Handle property requests
router.get('/properties', properties.index);
router.get('/properties/:id', properties.retrieve);
router.post('/properties', authorize, properties.create);
router.delete('/properties/:id', authorize, properties.delete);


// Handle apartment requests
router.get('/apartments/new', apartments.new);
router.post('/apartments', authorize, apartments.create);
router.delete('/apartments/:id', authorize, apartments.delete);
router.put('/apartments/:id', authorize, apartments.update);
//send the post through ajax
//send the request throug the router to submit the new apparmtnet
// Export the router
module.exports = router;

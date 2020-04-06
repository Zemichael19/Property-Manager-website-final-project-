// Controller for the properties collection.
const User = require('../models/user');

// GET /properties
module.exports.index = function(request, response, next) {
  User.distinct('_id')
    .then(userIDs => response.redirect(`/user/${userIDs[0]}`))
    .catch(error => next(error));
};

// GET /courses/:id
module.exports.retrieve = function(request, response, next) {
  const queries = [
    User.findById(request.params.id),
    User.distinct('_id')
  ];

  Promise.all(queries).then(function([user, userIDs]) {
    if (user) {
      response.render('properties/index', {user: user, userIDs: userIDs});
    } else {
      next(); // No such property
    }
  }).catch(error => next(error));
};

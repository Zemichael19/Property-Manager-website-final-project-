const User = require('../models/user');

// POST /login (with a user ID in the request body)
module.exports.login = function(request, response, next) {
  User.findById(request.body.id)
    .then(function(user) {
      if (user) {
        request.session.user = user;
        response.status(200).end();
      } else {
        next(); // No such user
      }
    }).catch(error => next(error));
};

module.exports.create = function(request, response, next) {
  User.create(request.body)
    .then(property => response.status(201).send(property.id))
    .catch(error => next(error));
};

const User = require('../models/user');

// POST /login (with a user ID in the request body)
module.exports.login = function(request, response, next) {
  User.find("e_mail")
    .then(function(user) {
      if (user) {
        request.session.user = user;
        response.status(200).end();
      } else {
        next(); // No such user
      }
    }).catch(error => next(error));
};

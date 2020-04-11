// Controller for the section collection.
const Apartment = require('../models/apartment');

// GET /sections?sort=
module.exports.index = function(request, response, next) {
  const order = request.query.sort || 'u_num'; // Default to sort by unit number

  Apartment.find().sort(order)
    .then(apartments => response.render('apartmen/index', {apartments: apartments, order: order}))
    .catch(error => next(error));
};

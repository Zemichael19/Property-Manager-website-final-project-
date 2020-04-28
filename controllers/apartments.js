// Controller for the section collection.
const Apartment = require('../models/apartment');


module.exports.new = function(request, response, next)
{
  response.render('apartments/new');
}
// POST /apartments
module.exports.create = function(request, response, next) {
  Apartment.create(request.body)
    .then(apartment => response.status(201).send(apartment))
    .catch(error => next(error));
};

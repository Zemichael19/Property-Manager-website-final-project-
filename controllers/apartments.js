// Controller for the section collection.
const Apartment = require('../models/apartment');

// GET /apartments?sort=
module.exports.index = function(request, response, next) {
  const order = request.query.sort || 'u_num'; // Default to sort by unit number

  Apartment.find().sort(order)
    .then(apartments => response.render('apartments/index', {apartments: apartments, order: order}))
    .catch(error => next(error));
};


// POST /apartments (with the new course in the request body)
module.exports.create = function(request, response, next) {
  Apartment.create(request.body)
    .then(apartment => response.status(201).send(property.id))
    .catch(error => next(error));
};

module.exports.new = function(request, response) {
  response.render('apartments/new');
};

// DELETE /apartment
module.exports.delete = function(request, response, next) {
  Aapartment.findByIdAndDelete(request.params.id)
    .then(apartment => apartment ? response.status(200).end() : next())
    .catch(error => next(error));
};

// PUT /apartment(with the changes in the request body)
module.exports.update = function(request, response, next) {
  Apartment.findByIdAndUpdate(request.params.id, request.body)
    .then(apartment =>apartment ? response.status(200).end() : next())
    .catch(error => next(error));
};

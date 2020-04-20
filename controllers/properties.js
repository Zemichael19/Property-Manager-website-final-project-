// Controller for the properties collection.
const Property = require('../models/property');

// Controller for the apartments collection.
const Apartment = require('../models/apartment');

// GET /properties
module.exports.index = function(request, response, next) {
  Property.distinct('_id')
    .then(propertyIDs => response.redirect(`/properties/${propertyIDs[0]}`))
    .catch(error => next(error));
};

// GET /properties/:id?sort
module.exports.retrieve = function(request, response, next) {
  const order = request.query.sort || 'n_rooms';
  const queries = [
    Property.findById(request.params.id),
    Property.find(),
    Apartment.find().where("property").equals(request.params.id).sort(order)
  ];

  Promise.all(queries).then(function([property, properties, apartments]) {
    if (property) {
      response.render('properties/index', {property: property, properties: properties, apartments:apartments, order:order});
    } else {
      next(); // No such property
    }
  }).catch(error => next(error));
};

// POST /courses (with the new course in the request body)
module.exports.create = function(request, response, next) {
  Property.create(request.body)
    .then(property => response.status(201).send(property.id))
    .catch(error => next(error));
};

// DELETE /courses/:id
module.exports.delete = function(request, response, next) {
  Property.findByIdAndDelete(request.params.id)
    .then(property => property ? response.status(200).end() : next())
    .catch(error => next(error));
};

// PUT /courses/:id (with the changes in the request body)
module.exports.update = function(request, response, next) {
  Course.findByIdAndUpdate(request.params.id, request.body)
    .then(property => property ? response.status(200).end() : next())
    .catch(error => next(error));
};

// Controller for the properties collection.
const Property = require('../models/property');

// Controller for the section collection.
const Apartment = require('../models/apartment');

// GET /properties
module.exports.index = function(request, response, next) {
  Property.distinct('_id')
    .then(propertyIDs => response.redirect(`/properties/${propertyIDs[0]}`))
    .catch(error => next(error));
};

// GET /properties/:id?sort
module.exports.retrieve = function(request, response, next) {
  const order = request.query.sort || 'u_num';
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

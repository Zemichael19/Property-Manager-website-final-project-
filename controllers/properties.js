// Controller for the properties collection.
const Property = require('../models/property');

// GET /properties
module.exports.index = function(request, response, next) {
  Property.distinct('_id')
    .then(propertyIDs => response.redirect(`/properties/${propertyIDs[0]}`))
    .catch(error => next(error));
};

// GET /courses/:id
module.exports.retrieve = function(request, response, next) {
  const queries = [
    Property.findById(request.params.id),
    Property.distinct('_id')
  ];

  Promise.all(queries).then(function([property, propertyID]) {
    if (property) {
      response.render('properties/index', {property: property, propertyID: propertyID});
    } else {
      next(); // No such property
    }
  }).catch(error => next(error));
};

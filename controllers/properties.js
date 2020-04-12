// Controller for the properties collection.
const Property = require('../models/property');

// Controller for the section collection.
const Apartment = require('../models/apartment');



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

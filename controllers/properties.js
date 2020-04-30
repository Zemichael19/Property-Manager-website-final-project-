// Controller for the properties collection.
const Property = require('../models/property');

// Controller for the apartments collection.
const Apartment = require('../models/apartment');

// GET /properties
module.exports.index = function(request, response, next) {
  Property.find().where('user').equals(request.session.user._id)
    .then(function(properties){
      if (properties.length) {
        response.redirect(`/properties/${properties[0]._id}`);
      } else {
        response.redirect('/properties/new');
      }
    }).catch(error => next(error));
};

// GET /properties/:id?sort
module.exports.retrieve = function(request, response, next) {
  const order = request.query.sort;
  const queries = [
    Property.findById(request.params.id),
    Property.find().where('user').equals(request.session.user._id),
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

module.exports.edit = function(request, response, next) {
  Property.find().where('user').equals(request.session.user._id)
    .then(function(properties){
      if (properties.length) {
        response.redirect(`/properties/${properties[0]._id}`);
      } else {
        response.redirect('/properties/new');
      }
    }).catch(error => next(error));
};


module.exports.editing = function(request, response, next) {
  const queries = [
    Property.findById(request.params.id),
    Property.find().where('user').equals(request.session.user._id),
    Apartment.find().where("property").equals(request.params.id),
  ];
  Promise.all(queries).then(function([property, properties, apartments]) {
    if (property) {
      response.render('properties/edit', {property: property, properties: properties, apartments:apartments});
    } else {
      next(); // No such property
    }
  }).catch(error => next(error));
};

// POST /properties (with the new course in the request body)
module.exports.create = function(request, response, next) {
  Property.create(request.body)
    .then(property => response.status(201).send(property.id))
    .catch(error => next(error));
};

module.exports.new = function(request, response) {
  response.render('properties/new');
};

// DELETE /properties/:id
module.exports.delete = function(request, response, next) {
  Property.findByIdAndDelete(request.params.id)
    .then(property => property ? response.status(200).end() : next())
    .catch(error => next(error));
};

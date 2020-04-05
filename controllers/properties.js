// Controller for the properties collection.
const Property = require('../models/course');

// GET /properties
module.exports.index = function(request, response, next) {
  Property.distinct('_id')
    .then(courseIDs => response.redirect(`/properties/${courseIDs[0]}`))
    .catch(error => next(error));
};

// GET /courses/:id
module.exports.retrieve = function(request, response, next) {
  const queries = [
    Course.findById(request.params.id),
    Course.distinct('_id')
  ];

  Promise.all(queries).then(function([course, courseIDs]) {
    if (course) {
      response.render('courses/index', {course: course, courseIDs: courseIDs});
    } else {
      next(); // No such course
    }
  }).catch(error => next(error));
};

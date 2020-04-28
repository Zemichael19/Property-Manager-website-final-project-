// Controller for the section collection.
const Apartment = require('../models/apartment');


module.exports.new = function(request, response, next)
{
  response.render('apartments/new');
}

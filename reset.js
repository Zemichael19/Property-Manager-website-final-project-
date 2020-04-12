const mongoose = require('mongoose');
const connect = require('./db');
const Property = require('./models/property');
const Apartment = require('./models/apartment');

// Connect to the database
connect();

//const users = [
  //new User({name: 'Arman', e_mail:'arman.tavana99@gmail.com', number:'3152611565', pass_w:'a123456789'})
//]

const properties = [
  new Property({address:'Manhattan', n_apart:2}),
  new Property({address:'Bronx', n_apart:3}),
];


const apartments = [
  new Apartment({property: properties[0].id, n_rooms: 3, n_bathrooms: 2,listed: false, furnished:true, floor: 4,sqFoot:1400,pets: true,laundry: true,parking: true,s_date: 'June 2018' ,e_date: 'June 2021',ac: true,u_num: 410}),
  new Apartment({property: properties[0].id, n_rooms: 2, n_bathrooms: 8,listed: true, furnished:true, floor: 2,sqFoot:1100,pets: true,laundry: true,parking: true,s_date: 'January 2017' ,e_date: 'January 2020',ac: true,u_num: 209}),
  new Apartment({property: properties[1].id, n_rooms: 1, n_bathrooms: 1,listed: false, furnished:false, floor: 3,sqFoot:800,pets: true,laundry: true,parking: true,s_date: 'October 2019' ,e_date: 'April 2020',ac: true,u_num: 303}),
  new Apartment({property: properties[1].id, n_rooms: 2, n_bathrooms: 2,listed: true, furnished:true, floor: 1,sqFoot:1200,pets: true,laundry: true,parking: true,s_date: 'April 2019' ,e_date: 'April 2020',ac: true,u_num: 101}),
  new Apartment({property: properties[1].id, n_rooms: 1, n_bathrooms: 1,listed: false, furnished:false, floor: 1,sqFoot:900,pets: true,laundry: true,parking: true,s_date: 'May 2019' ,e_date: 'May 2020',ac: true,u_num: 110}),
];

// Reset the database
mongoose.connection.dropDatabase()
  .then(() => Promise.all(properties.map(property => property.save())))
  .then(() => Promise.all(apartments.map(apartment => apartment.save())))
  .then(() => mongoose.connection.close())
  .then(() => console.log('Database is ready.'))
  .catch(error => console.error(error.stack));

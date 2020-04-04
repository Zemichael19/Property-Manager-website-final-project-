const mongoose = require('mongoose');
const connect = require('./db');
const Property = require('./manage/property');
const Apartment = require('./manage/apartment');

// Connect to the database
connect();

const properties = [
  new Property({address:'Manhattan', n_apart:200}),
  new Property({address:'Bronx', n_apart:250}),
  new Property({address:'Brooklyn', n_apart:300}),
  new Property({address:'Queens', n_apart:320}),
  new Property({address:'Staten Island', n_apart:400}),
];


const apartments = [
  new Apartment({n_rooms: 3, n_bathrooms: 2,listed: false, furnished:true, floor: 4,sqFoot:1400,pets: true,laundry: true,parking: true,s_date: 'June 2018' ,e_date: 'June 2021',ac: true,u_num: 410}),
  new Apartment({n_rooms: 2, n_bathrooms: 1,listed: true, furnished:true, floor: 2,sqFoot:1100,pets: true,laundry: true,parking: true,s_date: 'January 2017' ,e_date: 'January 2020',ac: true,u_num: 209}),
  new Apartment({n_rooms: 1, n_bathrooms: 1,listed: false, furnished:false, floor: 3,sqFoot:800,pets: true,laundry: true,parking: true,s_date: 'October 2019' ,e_date: 'April 2020',ac: true,u_num: 303}),
  new Apartment({n_rooms: 2, n_bathrooms: 2,listed: true, furnished:true, floor: 1,sqFoot:1200,pets: true,laundry: true,parking: true,s_date: 'April 2019' ,e_date: 'April 2020',ac: true,u_num: 101}),
  new Apartment({n_rooms: 1, n_bathrooms: 1,listed: false, furnished:false, floor: 1,sqFoot:900,pets: true,laundry: true,parking: true,s_date: 'May 2019' ,e_date: 'May 2020',ac: true,u_num: 110}),
];

// Reset the database
mongoose.connection.dropDatabase()
  .then(() => Promise.all(properties.map(property => property.save())))
  .then(() => Promise.all(apartments.map(apartment => apartment.save())))
  .then(() => mongoose.connection.close())
  .then(() => console.log('Database is ready.'))
  .catch(error => console.error(error.stack));

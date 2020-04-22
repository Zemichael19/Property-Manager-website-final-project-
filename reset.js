const mongoose = require('mongoose');
const connect = require('./db');
const User = require('./models/user');
const Property = require('./models/property');
const Apartment = require('./models/apartment');

// Connect to the database
connect();

const users = [
  new User({_id: 'arman.tavana99@gmail.com',name: 'Arman'}),
  new User({_id: 'mike@gmail.com',name: 'Mike'})
]

const properties = [
  new Property({user: 'arman.tavana99@gmail.com', address:'Manhattan', n_apart:2}),
  new Property({user: 'arman.tavana99@gmail.com', address:'Hobokan', n_apart:5}),
  new Property({user: 'mike@gmail.com', address:'Bronx', n_apart:3})
];


const apartments = [
  new Apartment({property: properties[0].id, n_rooms: 3, n_bathrooms: 2,listed: false, furnished:true, floor: 4,sqFoot:1400,pets: true,laundry: false,parking: true,s_date: 'June 2018' ,e_date: 'June 2021',ac: false,u_num: 410}),
  new Apartment({property: properties[0].id, n_rooms: 2, n_bathrooms: 1,listed: true, furnished:true, floor: 2,sqFoot:2300,pets: false,laundry: true,parking: false,s_date: '' ,e_date: '',ac: true,u_num: 209}),
  new Apartment({property: properties[1].id, n_rooms: 6, n_bathrooms: 5,listed: true, furnished:false, floor: 8,sqFoot:5500,pets: true,laundry: false,parking: true,s_date: '' ,e_date: '',ac: false,u_num: 806}),
  new Apartment({property: properties[1].id, n_rooms: 3, n_bathrooms: 2,listed: false, furnished:false, floor: 2,sqFoot:1600,pets: true,laundry: true,parking: true,s_date: 'May 2018' ,e_date: 'May 2021',ac: true,u_num: 201}),
  new Apartment({property: properties[1].id, n_rooms: 2, n_bathrooms: 3,listed: false, furnished:true, floor: 5,sqFoot:1500,pets: true,laundry: false,parking: false,s_date: 'July 2019' ,e_date: 'July 2022',ac: false,u_num: 510}),
  new Apartment({property: properties[1].id, n_rooms: 1, n_bathrooms: 1,listed: true, furnished:true, floor: 1,sqFoot:800,pets: false,laundry: true,parking: true,s_date: '' ,e_date: '',ac: true,u_num: 110}),
  new Apartment({property: properties[1].id, n_rooms: 4, n_bathrooms: 5,listed: true, furnished:false, floor: 4,sqFoot:4300,pets: false,laundry: false,parking: true,s_date: '' ,e_date: '',ac: true,u_num: 409}),
  new Apartment({property: properties[2].id, n_rooms: 1, n_bathrooms: 1,listed: false, furnished:false, floor: 3,sqFoot:800,pets: true,laundry: true,parking: true,s_date: 'september 2019' ,e_date: 'February 2021',ac: true,u_num: 303}),
  new Apartment({property: properties[2].id, n_rooms: 2, n_bathrooms: 2,listed: true, furnished:true, floor: 1,sqFoot:1200,pets: false,laundry: true,parking: false,s_date: '' ,e_date: '',ac: false,u_num: 101}),
  new Apartment({property: properties[2].id, n_rooms: 1, n_bathrooms: 1,listed: false, furnished:false, floor: 1,sqFoot:900,pets: true,laundry: false,parking: true,s_date: 'May 2019' ,e_date: 'May 2020',ac: true,u_num: 110}),
];

// Reset the database
mongoose.connection.dropDatabase()
  .then(() => Promise.all(users.map(user => user.save())))
  .then(() => Promise.all(properties.map(property => property.save())))
  .then(() => Promise.all(apartments.map(apartment => apartment.save())))
  .then(() => mongoose.connection.close())
  .then(() => console.log('Database is ready.'))
  .catch(error => console.error(error.stack));

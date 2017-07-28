var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/express-mongoose-lesson-starter');

var User = require('../models/user');
var Review = require('../models/review');
var Adventure = require('../models/adventure')

// Use native promises
mongoose.Promise = global.Promise;

// First we clear the database of existing users, reviews and adventures.
User.remove({}, function(err){
  console.log(err);
});


// create new adventures

// adventure schema
// var AdventureSchema = new Schema({
//     categories: String,
//     subCategories: String,
//     location: String,
//     title: String,
//     description: String,
//     images: [String],
//     reviews: [St,ring],
//     created_at: Date,
//     updated_at: Date,
// });

// //Review Schema
// var ReviewSchema = new Schema({
//     rating: Boolean,
//     user: String,
//     created_at: Date,
//     updated_at: Date,
//     tip: String,
// });

var cloudlandCanyon = new Adventure({
    categories: 'outdoors',
    subCategories: 'hiking',
    location: 'north west GA',
    title: 'Cloudland Canyon State Park',
    description: 'nice park for hiking on the GA mountains',
    images: ' ',
    reviews: ' ',
    created_at: '03-22-2017',
    updated_at: '04-25-2017'
})

var reviewnum1 = new review({
    rating: true,
    user: jessica,
    created_at: 02-02-2017,
    updated_at: 02-03-2017,
    tip: 'do not eat much. there is no restrooms in this place'
})


Review.remove({}, function(err){
  console.log(err);
});

Adventure.remove({}, function(err){
  console.log(err);
});


// create new users
var jessica = new User({
  first_name: 'Jessica',
  last_name: 'Matty',
  rejects: [ ],
  created_at: "04-17-2017",
  updated_at: "06-10-2017"
});

var edgar = new User({
  first_name: 'Edgar',
  last_name: 'Mendez',  
  rejects: [ ],
  created_at: "05-10-2016",
  updated_at: "06-30-2016"
});

var william = new User({
  first_name: 'William',
  last_name: 'Huizenga',
  rejects: [ ],
  created_at: "03-10-2016",
  updated_at: "07-20-2016"
});

var eric = new User({
  first_name: 'Eric',
  last_name: 'Jonelunas',
  rejects: [ ],
  created_at: "02-05-2017",
  updated_at: "04-15-2017"
});


// save the users
jessica.save(function(err) {
  if (err) console.log(err);

  console.log('Jessica created!');
});

edgar.save(function(err) {
  if (err) console.log(err);

  console.log('Edgar created!');
});

william.save(function(err) {
  if (err) console.log(err);
  
  console.log('William created!');
});

eric.save(function(err) {
  if (err) console.log(err);
  
  console.log('Eric created!');
});

mongoose.connection.close();
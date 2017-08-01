var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/wdi-adventure-app');

var User = require('../models/user');
var Review = require('../models/review');
var Adventure = require('../models/adventure')

// Use native promises
mongoose.Promise = global.Promise;

// First we clear the database of existing users, reviews and adventures.
User.remove({}, function(err) {
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
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam provident qui veniam, tempora a quas hic cumque eveniet, odit vel ipsa. Iusto qui aperiam repellat in, hic nobis consequuntur obcaecati! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam provident qui veniam, tempora a quas hic cumque eveniet, odit vel ipsa. Iusto qui aperiam repellat in, hic nobis consequuntur obcaecati!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam provident qui veniam, tempora a quas hic cumque eveniet, odit vel ipsa. Iusto qui aperiam repellat in, hic nobis consequuntur obcaecati! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam provident qui veniam, tempora a quas hic cumque eveniet, odit vel ipsa. Iusto qui aperiam repellat in, hic nobis consequuntur obcaecati! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam provident qui veniam, tempora a quas hic cumque eveniet, odit vel ipsa. Iusto qui aperiam repellat in, hic nobis consequuntur obcaecati! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam provident qui veniam, tempora a quas hic cumque eveniet, odit vel ipsa. Iusto qui aperiam repellat in, hic nobis consequuntur obcaecati!",
    images: 'https://2wzlm92dvpgd3a560m9ue6tx-wpengine.netdna-ssl.com/images/cloudland-canyon-sittons-gulch-trail/1-cloudland-canyon-sittons-gulch-trail.jpg',
    reviews: ' ',
    created_at: '03-22-2017',
    updated_at: '04-25-2017'
})

var tallulahGorgeStatePark = new Adventure({
    categories: 'outdoors',
    subCategories: 'hiking',
    location: 'Tallulah Falls, GA, 30573',
    title: 'Tallulah Gorge State Park',
    description: 'deepest canyon east of the mississippi river',
    images: ' ',
    reviews: ' ',
    created_at: '06-25-2017',
    updated_at: '06-28-2017'
})

var AmicalolaFallsStatePark = new Adventure({
    categories: 'outdoors',
    subCategories: 'hiking',
    location: 'north west GA',
    title: 'Amicalola Falls State Park and lodge',
    description: 'wonderful for hiking, picnics and have fun with your pets',
    images: ' ',
    reviews: ' ',
    created_at: '03-06-2015',
    updated_at: '04-15-2015'
})

var LakeLanierStatePark = new Adventure({
    categories: 'outdoors',
    subCategories: 'biking',
    location: 'north west GA',
    title: 'Lake Lannier State Park and lodge',
    description: 'wonderful for hiking, picnics and have fun with your pets',
    images: ' ',
    reviews: ' ',
    created_at: '03-06-2015',
    updated_at: '04-15-2015'
})

var closeToMyHouseStatePark = new Adventure({
    categories: 'outdoors',
    subCategories: 'camping',
    location: 'north west GA',
    title: 'Close to my house State Park and lodge',
    description: 'wonderful for hiking, picnics and have fun with your pets',
    images: ' ',
    reviews: ' ',
    created_at: '03-06-2015',
    updated_at: '04-15-2015'
})

var HighMuseumOfArt = new Adventure({
    categories: 'indoors',
    subCategories: 'museums',
    location: 'Midtown Atlanta, GA',
    title: 'The High Museum of Art',
    description: 'The leading art museum in the Southeastern United States. With more than 15,000 works of art in its permanent collection, the High has an extensive anthology of 19th- and 20th-century American and decorative art; significant holdings of European paintings; a growing collection of African American art; and burgeoning collections of modern and contemporary art, photography, folk art and African art. The High is also dedicated to supporting and collecting works by Southern artists',
    images: "/images/highmuseum.jpg",
    reviews: ' ',
    created_at: '03-06-2015',
    updated_at: '04-15-2015'
})

var reviewNum1 = new Review({
    rating: true,
    user: jessica,
    created_at: 02 - 02 - 2017,
    updated_at: 02 - 03 - 2017,
    tip: 'do not eat much. there is no restrooms in this place'
})


Review.remove({}, function(err) {
    console.log(err);
});

Adventure.remove({}, function(err) {
    console.log(err);
});


// create new users
var jessica = new User({
    first_name: 'Jessica',
    last_name: 'Matty',
    rejects: [],
    created_at: "04-17-2017",
    updated_at: "06-10-2017"
});

var edgar = new User({
    first_name: 'Edgar',
    last_name: 'Mendez',
    rejects: [],
    created_at: "05-10-2016",
    updated_at: "06-30-2016"
});

var william = new User({
    first_name: 'William',
    last_name: 'Huizenga',
    rejects: [],
    created_at: "03-10-2016",
    updated_at: "07-20-2016"
});

var eric = new User({
    first_name: 'Eric',
    last_name: 'Jonelunas',
    rejects: [],
    created_at: "02-05-2017",
    updated_at: "04-15-2017"
});

cloudlandCanyon.save((err) => {
    if (err) console.log(err);
    console.log("cloudlandCanyon Saved");
})

tallulahGorgeStatePark.save((err) => {
    if (err) console.log(err);
    console.log("tallulahGorgeStatePark Saved");
})

AmicalolaFallsStatePark.save((err) => {
    if (err) console.log(err);
    console.log("AmicalolaFallsStatePark Saved");
})

LakeLanierStatePark.save((err) => {
    if (err) console.log(err);
    console.log("LakeLanierStatePark Saved");
})

closeToMyHouseStatePark.save((err) => {
    if (err) console.log(err);
    console.log("closeToMyHouseStatePark Saved");
})

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
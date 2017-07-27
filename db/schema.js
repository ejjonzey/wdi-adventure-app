var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Use native promises
mongoose.Promise = global.Promise;

//Declare new Schema
//give some keys
//keys:types

// User Schema
var userSchema = new Schema({
    first_name: String,
    last_name: String,
    rejects: [String],
    created_at: Date,
    updated_at: Date,
});

userSchema.pre('save', function(next) {
    now = new Date();
    this.updated_at = now;
    if (!this.created_at) {
        this.created_at = now;
    }
    next();
});

// adventure schema
var adventureSchema = new Schema({
    categories: String,
    subCategories: String,
    location: String,
    title: String,
    description: String,
    images: [String],
    reviews: [String],
    created_at: Date,
    updated_at: Date,
});

adventureSchema.pre('save', function(next) {
    now = new Date();
    this.updated_at = now;
    if (!this.created_at) {
        this.created_at = now;
    }
    next();
});

//Review Schema
var reviewSchema = new Schema({
    rating: Boolean,
    user: String,
    created_at: Date,
    updated_at: Date,
    tip: String,
});


reviewSchema.pre('save', function(next) {
    now = new Date();
    this.updated_at = now;
    if (!this.created_at) {
        this.created_at = now;
    }
    next();
});

var userModel = mongoose.model("user", userSchema);
var adventureModel = mongoose.model("adventure", adventureSchema);
var reviewModel = mongoose.model("adventure", adventureSchema);



module.exports = {
    user: userModel,
    adventure: adventureModel,
    review: reviewModel,
};
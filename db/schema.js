var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Use native promises
mongoose.Promise = global.Promise;

//Declare new Schema
//give some keys
//keys:types

// User Schema
var UserSchema = new Schema({
    first_name: String,
    last_name: String,
    user_id: String,
    user_pass: String,
    rejects: [String],
    created_at: Date,
    updated_at: Date,
});

UserSchema.pre('save', function(next) {
    if (!this.images) {
        this.images = "/images/piper.jpg"
    }

    now = new Date();
    this.updated_at = now;
    if (!this.created_at) {
        this.created_at = now;
    }
    next();
});

// adventure schema
var AdventureSchema = new Schema({
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

AdventureSchema.pre('save', function(next) {
    now = new Date();
    this.updated_at = now;
    if (!this.created_at) {
        this.created_at = now;
    }
    next();
});

//Review Schema
var ReviewSchema = new Schema({
    rating: Boolean,
    user: String,
    created_at: Date,
    updated_at: Date,
    tip: String,
});


ReviewSchema.pre('save', function(next) {
    now = new Date();
    this.updated_at = now;
    if (!this.created_at) {
        this.created_at = now;
    }
    next();
});

var UserModel = mongoose.model("User", UserSchema);
var AdventureModel = mongoose.model("Adventure", AdventureSchema);
var ReviewModel = mongoose.model("Review", ReviewSchema);



module.exports = {
    User: UserModel,
    Adventure: AdventureModel,
    Review: ReviewModel,
};
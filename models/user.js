const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const bcrypt = require('bcryptjs');
const connection = mongoose.createConnection('mongodb://localhost/auctionShop');

autoIncrement.initialize(connection);

// User Schema
var UserSchema = mongoose.Schema({
    fname: {
        type: String,
		required: [true, 'Firstname field is required']
    },
    lname: {
        type: String,
		required: [true, 'Lastname field is required']
    },
    password: {
        type: String,
		required: [true, 'Password field is required']
    },
    email: {
        type: String,
		required: [true, 'Email field is required']
    },
    address: {
        type: String
    },
    city: {
        type: String
    },
    country: {
        type: String
    },
    zip: {
        type: String
    },
    phone: {
        type: String
    }
});

UserSchema.plugin(autoIncrement.plugin, {model: 'User', field: 'userId'});

const User = module.exports = mongoose.model('User', UserSchema);


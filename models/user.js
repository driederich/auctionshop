const mongoose = require('mongoose');

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

const User = module.exports = mongoose.model('User', UserSchema);


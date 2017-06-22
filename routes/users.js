const express = require('express');
const router = express.Router();

const User = require('../models/user');

// Register User
router.post('/register', function(req, res, next){
    User.create(req.body).then(function(user){
        res.send(user);
    }).catch(next);
});

router.get('/login/:id', function (req, res, next) {
	User.findOne({email: req.params.id}).then(function(user){
        res.send(user);
    }).catch(next);
});



module.exports = router;
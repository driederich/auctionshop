var express = require('express');
var router = express.Router();

var Auction = require('../models/auction');

router.post('/new_product', function (req, res, next) {
    Auction.create(req.body).then(function(auction){
        res.send(auction);
    }).catch(next);
});

module.exports = router;
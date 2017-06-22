const express = require('express');
const router = express.Router();
const Auction = require('../models/auction');

// Get Open Auctions
router.get('/', function (req, res, next) {
	Auction.find({status: "open"}).then(function(auction){
		res.send(auction);
	}).catch(next);
});

router.get('/show_product/:id', function (req, res, next) {
	Auction.findOne({auctionId: req.params.id}).then(function(auction){
        res.send(auction);
    }).catch(next);
});

//todo
router.get('/show_user/vender/:email', function (req, res, next) {
   Auction.find({vender: req.params.email}).then(function(auction){
        res.send(auction);
    }).catch(next);
});

router.get('/show_user/bestBidderClosed/:email', function (req, res, next) {
   Auction.find({bestBidder: req.params.email, status: "closed"}).then(function(auction){
        res.send(auction);
    }).catch(next);
});

router.get('/show_user/bestBidderOpen/:email', function (req, res, next) {
   Auction.find({bestBidder: req.params.email, status: "open"}).then(function(auction){
        res.send(auction);
    }).catch(next);
});

router.put('/bid/:id', function (req, res, next) {	
	Auction.findOneAndUpdate({auctionId: req.params.id}, req.body).then(function(){
        Auction.findOne({auctionId: req.params.id}).then(function(auction){
            res.send(auction);
        });
    }).catch(next);
});

module.exports = router;
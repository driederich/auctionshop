const mongoose = require('mongoose');

// Auction Schema
const AuctionSchema = mongoose.Schema({
    vender: String,
    titel: String,
    description: String,
    category: String,
    time: {
        type: Date, default: Date.now
    },
    auctionTime: Number,
    status: String,
    img1: String,
    img2: String,
    img3: String,
    bestBidder: String,
    bestBid: Number
});

const Auction = module.exports = mongoose.model('Auction', AuctionSchema);

module.exports.getOffer = function (auctionId, callback) {
    var query = {auctionId: auctionId};
    Auction.findOne(query, callback)
}

module.exports.getAuctionsByVender = function (username, callback) {
    var query = {vender: username};
    Auction.find(query, callback);
}

module.exports.getOpenAuctionsByBestBidder = function (username, callback) {
    var query = {bestBidder: username, status: "open"};
    Auction.find(query, callback);
}

module.exports.getClosedAuctionsByBestBidder = function (username, callback) {
    var query = {bestBidder: username, status: "closed"};
    Auction.find(query, callback);
}
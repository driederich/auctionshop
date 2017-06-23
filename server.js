const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// set up express app
const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost:27017/auctionshop');

//set up static files
app.use(express.static('public'));

// use body-parser middleware
app.use(bodyParser.json());

// initialize routes
const routes = require('./routes/index');
const users = require('./routes/users');
const auctions = require('./routes/auctions');

app.use('/', routes);
app.use('/users', users);
app.use('/auctions', auctions);


// error handling middleware
app.use(function(err, req, res, next){
    console.log(err); // to see properties of message in our console
    res.status(422).send({error: err.message});
});

// listen for requests
app.listen(process.env.port || 8080, function(){
    console.log('now listening for requests');
});

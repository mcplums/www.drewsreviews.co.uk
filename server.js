var drewsreviews_artifacts = require('./build/contracts/DrewsReviews.json')
var contract = require('truffle-contract')
var Web3 = require('web3')
var provider = new Web3.providers.HttpProvider("http://localhost:8545");
var DrewsReviews = contract(drewsreviews_artifacts);
DrewsReviews.setProvider(provider);
var express = require('express');
var app = express();

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var ReviewModel = require('./review');
mongoose.connect("mongodb://localhost:27017/drews_reviews");
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(3000, function() {
	console.log("STFU or i will kick you in the nuts");
});

app.get('/', function(req, res) {
	res.send("Hello, Dickhead!");
});

setupReviewEventListener();

function  setupReviewEventListener() {
	var reviewEvent;
	DrewsReviews.deployed().then(function(i) {
		reviewEvent = i.newReview({fromBlock: 0, toBlock: 'latest'})
		reviewEvent.watch(function(err, result) {
			if (err) {
				console.log(err)
				return;
			}
			console.log(result.args);
			saveReview(result.args);
		});
	});
}

function saveReview(review) {
	//ProductModel is the scheme, as defined by product.js (which is required for this file, above) it searches the database for the id,it should return null
  ReviewModel.findOne({ 'blockchainId': review._filmId.toNumber() }, function (err, dbProduct) {
  	//this is a strange way of doing if else, you just put a return in the if, then you don't need to bother with the else
    if (dbProduct != null) {
      return;
    }

    var p = new ReviewModel({name: review._name, blockchainId: review._filmId,
      reviewText: review._review, score: review._score, posterSource: review.imageSource
     });

    //p.save is the magic here,the poduct as defined above is added to mongodb
    p.save(function(error) {
      if (error) {
        console.log(error);
      } else {
      	//ProductModel.count gets the total number of products in the database
        ReviewModel.count({}, function(err, count) {
         console.log("count is " + count);
        });
      }
    });
  })
}
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var Schema = mongoose.Schema;

var userReviewSchema = new Schema({
 filmId: Number,
 userReviewId: Number,
 userName: String,
 reviewText: String,
 score: Number,
});

var userReviewModel = mongoose.model('userReviewModel', userReviewSchema);


module.exports = userReviewModel;

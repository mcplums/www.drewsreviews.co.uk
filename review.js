var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var Schema = mongoose.Schema;

var ReviewSchema = new Schema({
 blockchainId: Number,
 name: String,
 reviewText: String,
 score: Number,
 posterSource: String, 
});

var ReviewModel = mongoose.model('ReviewModel', ReviewSchema);

module.exports = ReviewModel;

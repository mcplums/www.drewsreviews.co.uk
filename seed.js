DrewsReviews= artifacts.require("./DrewsReviews.sol");

module.exports = function(callback) {
DrewsReviews.deployed().then(function(f) {f.addReview('The Matrix', 'mad op', 11111111, 35, 'https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg').then(function(f) {console.log(f)})});

DrewsReviews.deployed().then(function(f) {f.addReview('Lord of the Rings', 'even more op', 11111111, 40, 'https://upload.wikimedia.org/wikipedia/en/9/9d/Lord_of_the_Rings_-_The_Return_of_the_King.jpg').then(function(f) {console.log(f)})});

DrewsReviews.deployed().then(function(f) {f.addUserReview(1, 'Captain Dumbass', 'Your review was terrible', 5).then(function(f) {console.log(f)})});
}

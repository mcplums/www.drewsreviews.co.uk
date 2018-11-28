DrewsReviews= artifacts.require("./DrewsReviews.sol");

module.exports = function(callback) {
DrewsReviews.deployed().then(function(f) {f.addReview('The Matrix', 'mad op but there wasnt enough of morpheos he was my favourite he was and i could have done with some nude trinity and the music could have been turned up, it was really good, Also why not zoidberg?', 11111111, 35, 'https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg').then(function(f) {console.log(f)})});

DrewsReviews.deployed().then(function(f) {f.addReview('Lord of the Rings', 'even more op', 11111111, 40, 'https://upload.wikimedia.org/wikipedia/en/9/9d/Lord_of_the_Rings_-_The_Return_of_the_King.jpg').then(function(f) {console.log(f)})});

/*DrewsReviews.deployed().then(function(f) {f.addUserReview(1, 'Captain Dumbass', 'Your review was terrible', 5).then(function(f) {console.log(f)})}); */

}

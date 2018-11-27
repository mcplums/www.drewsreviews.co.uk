pragma solidity ^0.4.23;

contract DrewsReviews {
    
    uint public reviewIndex;
    uint public userReviewIndex;
    address public owner = 0x7753233bfe961eC770602e3F80900E26A5357F36;
    
    mapping (uint => Review) reviewList;
    mapping (uint => userReview) userReviewList;


	struct Review {
		string name;
		string review;
		uint reviewDate;
		uint score;
		string imageSource;
	}

	struct userReview {
		uint filmId;
		string userName;
		string review;
		uint score;
	}
	
constructor () public {
    reviewIndex = 0;
    userReviewIndex = 0;
}

event newReview(uint _filmId, string _name, string _review, string _imageSource, uint _score);

event editedReview(uint _filmId, string _name, string _review, string _imageSource, uint _score);

event newUserReview(uint _filmId, uint _userReviewId, string _userName, string _review, uint _score);

function addReview(string _name, string _review, uint _reviewdate, uint _score, string _imageSource) public {
	//assert(msg.sender == owner);

    reviewIndex += 1;
    Review memory review = Review (_name, _review, _reviewdate, _score, _imageSource );
    reviewList[reviewIndex] = review;
    emit newReview(reviewIndex, _name, _review, _imageSource, _score);
}

function editReview(uint _filmId, string _name, string _review, uint _reviewdate, uint _score, string _imageSource) public {
	//assert(msg.sender == owner);
    
    Review memory review = Review (_name, _review, _reviewdate, _score, _imageSource );

    reviewList[_filmId] = review;
    emit editedReview(_filmId, _name, _review, _imageSource, _score);
}

function addUserReview(uint _filmId, string _username, string _review, uint _score) public {
    userReviewIndex += 1;
    
    userReview memory _userReview = userReview (_filmId, _username, _review, _score);
    userReviewList[userReviewIndex] = _userReview;
    emit newUserReview(_filmId, userReviewIndex, _username, _review, _score);
}

function getReview(uint _filmId) view public returns (string, string, uint, uint, string) {
	Review memory review = reviewList[_filmId];
	return (review.name, review.review, review.reviewDate, review.score, review.imageSource);
}

function getUserReview(uint _userReviewId) view public returns (uint, string, string, uint) {
	userReview memory _userReview = userReviewList[_userReviewId];
	return (_userReview.filmId, _userReview.userName, _userReview.review, _userReview.score);
}

}
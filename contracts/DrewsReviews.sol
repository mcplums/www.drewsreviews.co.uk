pragma solidity ^0.4.23;

contract DrewsReviews {
    
    uint public reviewIndex;
    uint public userReviewIndex;
    
    mapping (uint => Review) reviewList;
    mapping (uint =>  mapping(uint => Review)) userReviewList;

	struct Review {
		uint id;
		string name;
		string review;
		uint reviewDate;
		uint score;
		string imageSource;
	}

	struct userReview {
		uint id;
		string userName;
		string review;
		uint score;
	}
	
constructor () public {
    reviewIndex = 0;
    userReviewIndex = 0;
}

function addReview(string _name, string _review, uint _reviewdate, uint _score, string _imageSource) public {
    reviewIndex += 1;
    
    Review memory review = Review (reviewIndex, _name, _review, _reviewdate, _score, _imageSource );
    reviewList[reviewIndex] = review;
    
}

function addUserReview(uint _id, string _username, string _review, uint _score) public {
    userReviewIndex += 1;
    
    userReview memory _userReview = userReview (userReviewIndex, _username, _review, _score);
    userReviewList[_id][userReviewIndex] = _userReview;
    
}

function getReview(uint _id) view public returns (string, string, uint, uint, string) {
	Review memory review = reviewList[_id];
	return (review.name, review.review, review.reviewDate, review.score, review.imageSource);
}

}
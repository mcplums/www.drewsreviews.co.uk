pragma solidity ^0.4.23;

contract DrewsReviews {
    
    uint public reviewIndex;
    
    mapping (uint => Review) reviewList;

	struct Review {
		uint id;
		string name;
		string review;
		uint reviewDate;
		uint score;
		string imageSource;

	}
	
constructor () public {
    reviewIndex = 0;
}

function addReview(string _name, string _review, uint _reviewdate, uint _score, string _imageSource) public {
    reviewIndex += 1;
    
    Review memory review = Review (reviewIndex, _name, _review, _reviewdate, _score, _imageSource );
    reviewList[reviewIndex] = review;
    
}

function getReview(uint _id) view public returns (string, string, uint, uint, string) {
	Review memory review = reviewList[_id];
	return (review.name, review.review, review.reviewDate, review.score, review.imageSource);
}

}
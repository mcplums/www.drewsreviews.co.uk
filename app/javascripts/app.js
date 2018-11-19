// Import the page's CSS. Webpack will know what to do with it.
import "../stylesheets/app.css";

// Import libraries we need.
import { default as Web3} from 'web3';
import { default as contract } from 'truffle-contract'

const ipfsAPI = require('ipfs-api');
const ipfs = ipfsAPI({host: '127.0.0.1', port: '5001', protocol: 'http'});

// Import our contract artifacts and turn them into usable abstractions.
import DrewsReviewsartifacts from '../../build/contracts/DrewsReviews.json'

// MetaCoin is our usable abstraction, which we'll use through the code below.
var DrewsReviews = contract(DrewsReviewsartifacts);

var reader;

window.App = {
  start: function() {
    var self = this;


    // Bootstrap the MetaCoin abstraction for Use.
    DrewsReviews.setProvider(web3.currentProvider);
    console.log('STFU');

    if ($("#user-reviews").length > 0) {
            //product page always has an id, this is how it gets access to it
            let filmId = new URLSearchParams(window.location.search).get('id');
            console.log("STFU");
            renderSingleReview(filmId);
            renderUserReviews(filmId);
          } else {
            renderReviews();
          }


          $("#add-review").submit(function(event) {
            //Below gets the info that is submitted by the form, into the variable req
            const req = $("#add-review").serialize();
            //below cleans it up, i dont understand the details but it gets it into a readable state
            let params = JSON.parse('{"' + req.replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
            let decodedParams = {}
            Object.keys(params).forEach(function(v) {
              decodedParams[v] = decodeURIComponent(decodeURI(params[v]));
            });
            event.preventDefault();
            addReview(decodedParams);
          });

          $("#add-user-review").submit(function(event) {
            //Below gets the info that is submitted by the form, into the variable req
            const req = $("#add-user-review").serialize();
            //below cleans it up, i dont understand the details but it gets it into a readable state
            let params = JSON.parse('{"' + req.replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
            let decodedParams = {}
            Object.keys(params).forEach(function(v) {
              decodedParams[v] = decodeURIComponent(decodeURI(params[v]));
            });
            event.preventDefault();
            addUserReview(decodedParams);
          });
        }
      };

//below is the old version where it reads straight from the blockchain and not mongo
/*function renderReviews() {
  DrewsReviews.deployed().then(function(f) {
    f.reviewIndex.call().then(function(p) {
      var count;
      count = p;
      for (var i = 1; i <= count; i++) {
        f.getReview.call(i).then(function(q)
        {
          let node = $("<div id='review'>");
          node.append("<div id='poster'><img style='width:150px' src=" + q[4] + "></div>");
          node.append("<div id='rightside'><span id='title'>" + q[0] + "<img src='images/" + q[3].toNumber() + ".png'/></span><span id='reviewtext'>" + q[1] + "</span></div>");
          $("#reviews").append(node);
        });
      }
    });
  });
}*/

function renderReviews() {
  $.ajax({
    url: "http://localhost:3000/reviews",
    type: 'get',
    contentType: "application/json; charset=utf-8",
    data: {}
  }).done(function(data) {
    while(data.length > 0) {
      let chunks = data.splice(0, 4);
      chunks.forEach(function(review)
      {
        let node = $("<div id='review'>");
        node.append("<div id='poster'><img style='width:150px' src=" + review.posterSource + "></div>");
        node.append("<div id='rightside'><span id='title'>" + review.name + "<img src='images/" + review.score + ".png'/></span><span id='reviewtext'>" + review.reviewText + "</span></div>");
        $("#reviews").append(node);
      });

    }
  });
}

//old version
/*function renderSingleReview(id) {
  DrewsReviews.deployed().then(function(f) {
    f.getReview.call(id).then(function(q) {
      console.log(q);
      let node = $("<div id='review'>");
      node.append("<div id='poster'><img style='width:150px' src=" + q[4] + "></div>");
      node.append("<div id='rightside'><span id='title'>" + q[0] + "<img src='images/" + q[3].toNumber() + ".png'/></span><span id='reviewtext'>" + q[1] + "</span></div>");
      $("#reviews").append(node);
    });
  });
}*/

function renderSingleReview(id) {
  $.ajax({
    url: "http://localhost:3000/reviews",
    type: 'get',
    contentType: "application/json; charset=utf-8",
    data: {blockchainId: id}
  }).done(function(data) {
    while(data.length > 0) {
      let chunks = data.splice(0, 4);
      chunks.forEach(function(review)
      {
      let node = $("<div id='review'>");
        node.append("<div id='poster'><img style='width:150px' src=" + review.posterSource + "></div>");
        node.append("<div id='rightside'><span id='title'>" + review.name + "<img src='images/" + review.score + ".png'/></span><span id='reviewtext'>" + review.reviewText + "</span></div>");
        $("#reviews").append(node);
    });
  }
});
}

function renderUserReviews(id) {
  $.ajax({
    url: "http://localhost:3000/userreviews",
    type: 'get',
    contentType: "application/json; charset=utf-8",
    data: {blockchainId: id}
  }).done(function(data) {
    while(data.length > 0) {
      let chunks = data.splice(0, 4);
      chunks.forEach(function(review)
        {
          if (review.filmId == id)
          {
            let node = $("<div id='user-review'>");
            node.append("Name: " + review.userName + ". Review: " + review.reviewText + "<img src='images/" + review.score + ".png'/>");
            $("#user-reviews").append(node);
          }
          else {
            console.log("A userview has been not printed");
          }
        });
      }
    });
  }


//old version
/*function renderUserReviews(id) {
  DrewsReviews.deployed().then(function(f) {
    f.userReviewIndex.call().then(function(p) {
      var count;
      count = p;
      for (var i = 1; i <= count; i++) {
        f.getUserReview.call(i).then(function(q)
        {
          if (q[0] == id)
          {
            let node = $("<div id='user-review'>");
            node.append("Name:" + q[1] + ". Review: " + q[2] + "<img src='images/" + q[3].toNumber() + ".png'/>");
            $("#user-reviews").append(node);
          }
          else {
            console.log("A userview has been not printed");
          }
        });
      }
    });
  });
}*/

function addReview(review) {
  try {
    var ts = Math.round((new Date()).getTime() / 1000);
    DrewsReviews.deployed().then(function(f) {
      return f.addReview(review["film-name"], review["review-text"], ts, review["film-score"], review["poster-source"], {
        from: web3.eth.accounts[0],
        gas: 4700000
      });
    }).then(function(f) {
      alert("Review added");
    });
  }


  catch (error) {
    console.error(error);
  }
}

function addUserReview(review) {
  try {
    var ts = Math.round((new Date()).getTime() / 1000);
    let filmId = new URLSearchParams(window.location.search).get('id');
    DrewsReviews.deployed().then(function(f) {
      return f.addUserReview(filmId,review["user-name"], review["review-text"], review["film-score"], {
        from: web3.eth.accounts[0],
        gas: 4700000
      });
    }).then(function(f) {
      alert("User review added. Refresh the page after the transaction is confirmed to see your review");
    });
  }


  catch (error) {
    console.error(error);
  }
}

window.addEventListener('load', function() {
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
    console.warn("Using web3 detected from external source. If you find that your accounts don't appear or you have 0 MetaCoin, ensure you've configured that source properly. If using MetaMask, see the following link. Feel free to delete this warning. :) http://truffleframework.com/tutorials/truffle-and-metamask")
    // Use Mist/MetaMask's provider
    window.web3 = new Web3(web3.currentProvider);
  } else {
    console.warn("No web3 detected. Falling back to http://127.0.0.1:9545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    window.web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
  }

  App.start();
});
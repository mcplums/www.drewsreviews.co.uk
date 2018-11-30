DrewsReviews= artifacts.require("./DrewsReviews.sol");

module.exports = function(callback) {
DrewsReviews.deployed().then(function(f) {f.addReview('The Matrix', 'This film is the litmus test of whether I will get on with you. If this film didn\'t completely blow you away, we won\'t. And if you havn\'t seen it because you were too young when this came out, then... then I don\'t believe you. I\'m fairly certain 1999 was only a couple of years ago.', 11111111, 40, '220px-The_Matrix_Poster.jpg').then(function(f) {console.log(f)})});

DrewsReviews.deployed().then(function(f) {f.addReview('Lord of the Rings', 'The greatest film ever made. The best possible closure to the greatest trilogy of all time. Contains both the greatest scene and piece of music, of any film, at the same time- I\'m talking of course about <a href="/images/beacons.jpg">The Lighting of the Beacons</a>', 11111111, 40, 'Lord_of_the_Rings_-_The_Return_of_the_King.jpg').then(function(f) {console.log(f)})});

/*DrewsReviews.deployed().then(function(f) {f.addReview('Tron Legacy', 'No film has exceeded my expectations as much as this. The plot was average, but the visuals and (especially) the music were unbelievably good. Never have my two favourite music genres (EDM and movie scores) come together so well, before or since. It is surely one of the great injusticies of our age that it isn\'t getting a sequel.', 11111111, 40, 'Tron_Legacy_poster.jpg').then(function(f) {console.log(f)})});

DrewsReviews.deployed().then(function(f) {f.addReview('300', 'Cool af. Ten years on (!), I\'ve still yet to see a film with fight scenes this good.', 11111111, 40, '300poster.jpg').then(function(f) {console.log(f)})});

DrewsReviews.deployed().then(function(f) {f.addReview('Enter the Void', 'I feel like watching this is a rite of passage to being alive. It is so unlike every other film that it doesn\'t matter what you normally enjoy, watch this anyway. The less you know going in the better. ENTER! THE! VOID!', 11111111, 40, 'Enter-the-void-poster.png').then(function(f) {console.log(f)})});

DrewsReviews.deployed().then(function(f) {f.addReview('Star Wars: The Force Awakens', 'Clearly a copy of Episode 4, but because I\'m a dumb dumb, I didn\'t notice until someone pointed it out to me later. At the time I was loving every minute. I think I\'m the lowest common denominator that Hollywood aims their films at.', 11111111, 40, 'Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg').then(function(f) {console.log(f)})});

DrewsReviews.deployed().then(function(f) {f.addReview('The Shape of Water', 'If I were to list all films on the gap between how much I enjoyed them and how critically acclaimed they were, this would be....well I guess about in the middle. Anyway, I did not enjoy this, at all. I feel like a couple of well known reviewers said they enjoyed it for a laugh or they lost a bet, and the rest piled on because they didn\'t want to stick their neck out. ', 11111111, 15, 'The_Shape_of_Water_(film).png').then(function(f) {console.log(f)})});

DrewsReviews.deployed().then(function(f) {f.addReview('Ghostbusters (2016)', 'Hollywood pls', 11111111, 15, 'Ghostbusters_2016_film_poster.png').then(function(f) {console.log(f)})});

DrewsReviews.deployed().then(function(f) {f.addReview('Molly\'s Game. ', 'I give this a score of cleavage/10.', 11111111, 30, 'Mollys_Game.png').then(function(f) {console.log(f)})});

DrewsReviews.deployed().then(function(f) {f.addReview('Spectre', '<img src="images/spoilers.jpg">Spoilers<img src="images/spoilers.jpg"> Too silly- back to the nonsense of the earlier films that I thought the series had grown out of. Why did Jimmy B stroll through the front door of Blofeld\'s desert lair, unarmed and with no plan? What was he thinking? And why did Blofeld go to all the effort of rigging MI6 like some kind of haunted house to spook Bond? Didn\'t he have anything better to do?', 11111111, 25, 'spectre.jpg').then(function(f) {console.log(f)})});

DrewsReviews.deployed().then(function(f) {f.addReview('Star Wars: The Last Jedi', '<img src="images/spoilers.jpg">Spoilers<img src="images/spoilers.jpg">Unsatisfying. The whole film is basically the rebels running away, during which almost all of them die, as well as their entire fleet. It actually sounds quite cool when I put it like that, but I was left feeling that even when the rebels win in episode 9, it will be a completely hollow victory. And wtf was the point of the casino b plot?', 11111111, 20, 'Star_Wars_The_Last_Jedi.jpg').then(function(f) {console.log(f)})});

DrewsReviews.deployed().then(function(f) {f.addReview('Phantom Tread', 'I usually do not enjoy arty films, aka films \'where nothing much happens\' but I found this very enjoyable. Probably because of Daniel Day Lewis. I generally have no ability to tell an Oscar winning performance from a Hollyoaks extra, but even I can tell there is something special about this guy. It\'s like my brain refuses to believe it\'s the same person playing all his roles, they seem so completely different.',11111111, 35, 'Phantom_Thread.png').then(function(f) {console.log(f)})});

DrewsReviews.deployed().then(function(f) {f.addReview('The Greatest Showman', 'Please keep this on the down low but I enjoyed the music very much and was tempted to see it a second time. ', 11111111, 35, 'The_Greatest_Showman_poster.png').then(function(f) {console.log(f)})});

DrewsReviews.deployed().then(function(f) {f.addReview('Ready Player One', 'Mr Fancy Pants Executive probably thought \'this movie will allow us to throw in a thousand and one pop culture references. Kids love pop culture references\'. And he was right. I did.' , 11111111, 40, 'Ready_Player_One_(film).png').then(function(f) {console.log(f)})});

DrewsReviews.deployed().then(function(f) {f.addReview('Solo', 'On paper this seemed great, hit all the notes, yet despite this it felt a little meaningless. Probably I am saturated with Star Wars. It doesn\'t feel special anymore. ', 11111111, 30, 'Solo_A_Star_Wars_Story_poster.jpg').then(function(f) {console.log(f)})});

DrewsReviews.deployed().then(function(f) {f.addReview('Jurassic World: Fallen Kingdom', 'I think I was born without the part of my brain that makes guys think dinosours are cool (perhaps it\'s the same lobe that contains the personality). Boring and pointless.', 11111111, 20, 'Jurassic_World_Fallen_Kingdom.png').then(function(f) {console.log(f)})});


DrewsReviews.deployed().then(function(f) {f.addReview('Overlord', 'Unbelievable. Essentially Wolfeinstein the Movie, but amazing, unlike other video game films. The first half was a war film of the highest quality [much like Faramir]- the opening scenes in the plane were tense af. The second half- extremely creepy, almost a horror. The whole thing came together excellently.', 11111111, 40, 'Overlord2018Poster.jpg').then(function(f) {console.log(f)})});


DrewsReviews.deployed().then(function(f) {f.addReview('The Girl in the Spiders Web', 'There was a scene where the hero hacked into the car in front and deployed their airbags, on a phone, while driving. Who are those people who just don\'t care, and can sit through that and not want to throw their popcorn/friend at the screen?', 11111111, 25, 'The_Girl_in_the_Spiders_Web_poster.png').then(function(f) {console.log(f)})});*/












}

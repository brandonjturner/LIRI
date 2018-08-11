// console.log('this is loaded');
// 	var twitterKeys = {
// 		consumer_key: 'UXgtBozB7Eyi30czYftEJzikK',
// 		consumer_secret: '5mxCuaBWo9X1Plyoj3iNFlhpMwGQMeG5ETmCfoHorjJa65g3Hm',
// 		access_token_key: '37631954-xMk50hWLqq97WoOmFRk9zgXlTKajKcmYUhxIkFYvC',
// 		access_token_secret: 'hnM13lyCjGP5DLHicbaiYA3omUhISAY67QphFHUvbZwPT',
// 	}
// 	module.exports = twitterKeys;

// console.log('this is loaded');
// 	var spotifyKeys = {
// 		id: '8ce471164baf49f681e4db662a0c6344',
// 		secret: 'eea50eae2bf045c7931f023e28d83121'
// 	}
// 	module.exports = spotifyKeys;




	console.log('this is loaded');
exports.twitter = {
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
};
exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};
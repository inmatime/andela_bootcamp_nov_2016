var TwitterPackage = require('twitter');
var secret = {
  consumer_key: 'AoxFgkZcMEMxZcJZEHGDLWrlH',
  consumer_secret: 'gUJBRuWs4KGwLa2RGgmDfBrmLWd91RifcFYpdTphxkt937owYk',
  access_token_key: '2410986564-CIu9sIY3euiHOZq2qWNFaqPhRdfQK9VnyYuTGRq',
  access_token_secret: 'PwbcRfllLT5beOX6qxrf1vgot6anTsBXPgoerVczAQRYj'
}
var Twitter = new TwitterPackage(secret);

Twitter.post('statuses/update', {status: 'I am so excited!'},  function(error, tweet, response){
  if(error){
    console.log(error);
  }
  console.log(tweet);  // Tweet body.
  console.log(response);  // Raw response object.
});
// using the The Streaming API to listen and track when some one tweets with the hashtag #@Entrepreneur'.

Twitter.stream('statuses/filter', {track: '#Entrepreneur'}, function(stream) {
  stream.on('data', function(tweet) {
    console.log(tweet.text);
  });

  stream.on('error', function(error) {
    console.log(error);
  });
});

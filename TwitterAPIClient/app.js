var TwitterPackage = require('twitter');

var secret = require("./secret");

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

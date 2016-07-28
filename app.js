var express = require("express"),
	app = express(),
	bodyParser = require("body-parser"),
	elasticsearch = require("elasticsearch"),
	twitter = require("twitter");

// app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// twitter setting
var client = new twitter({
	consumer_key: 'OOyRcGXSBXJDvKpM3PTyTAYXO',
	consumer_secret:'BKvSeyCyDfRNILdp2tWqSXPPkNdqYfzDzQxxVVaDcQAev6BN3K',
	access_token_key: '589686559-1LIYZQY3cVstSEtRwWzmR2Zvbi5OR6CKzj8GJL91',
	access_token_secret: 'Vsp1f9o7at2eIav9IvLxr9bVdSQW4ksH8lWEfSWPC7n2N'
});

// stream API
// Callback function 
// client.stream('statuses/filter', {track: 'api'}, function(stream){
// 	stream.on('data', function(tweet) {
//     console.log(tweet.text);
//   });

//   stream.on('error', function(error) {
//     console.log(error);
//    });
// });

// temp store
var storedTweets = [];


// search API
client.get('search/tweets', {q: 'node.js'}, function(error, tweets, response) {
   console.log(tweets);


   tweets.statuses.forEach(function(tweet){
   		storedTweets.push(tweet);
   });
});



// 
app.get("/", function(req, res){
	res.render("landing");
});

app.get("/found", function(req, res){
	res.render("found", {storedTweets: storedTweets});
});










var listener = app.listen(8888, function(){
    console.log('Listening on port ' + listener.address().port); //Listening on port 8888
});

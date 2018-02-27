// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

var express = require("express");
var bodyParser = require("body-parser");
var path = require ("path");
// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

//require("./routing/apiRoutes")(app);
//require("./app/routing/html-routes")(app);

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

//array of objects for our friends
var possibleFriends = [
	{
	 name: "Heidi",
	 photo: "http://via.placeholder.com/350x150",
	 scores: ["1","1","1","1","1","1","1","1","1","1"]
	},
	{
	 name: "Christine",
	 photo: "http://via.placeholder.com/350x150",
	 scores: ["2","5","3","5","4","2","1","1","2","3"]
	},
	{
	 name: "Janet",
	 photo: "http://via.placeholder.com/350x150",
	 scores: ["2","3","4","5","1","2","3","4","5","1"]
	},
	{
	 name: "Joan",
	 photo: "http://via.placeholder.com/350x150",
	 scores: ["4","4","4","3","3","3","4","4","3","2"]
	}
];
app.get ("/",function(req,res){
	res.sendFile(path.join(__dirname, "/../FriendFinder/app/public/index.html"));
});
app.get('/survey', function (req, res) {
  res.sendFile(path.join(__dirname,"/../FriendFinder/app/public/survey.html"))
});
app.get('/api/friends', function (req,res) {
  res.json(possibleFriends);
});
app.post("/api/friends", function(req, res) {
	var newFriend = req.body;
	console.log(newFriend);
	possibleFriends.push(newFriend);
});
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

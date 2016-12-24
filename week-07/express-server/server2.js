var express = require("express");
var app = express();
var PORT = 3000;

// Character "database"

var yoda = {
	name: "Yoda",
	role: "Jedi Master",
	age: 900,
	forcePoints: 2000
};

var darthmaul = {
	name: "Darth Maul",
	role: "sith Lord",
	age: 200,
	forcePoints: 1200
};

var lukeskywalker = {
	name: "Luke Skywalker",
	role: "Jedi",
	age: 22,
	forcePoints: 900
}

var characters = {
	"yoda": yoda,
	"darthmaul": darthmaul,
	"lukeskywalker": lukeskywalker
}

// Routes

app.get("/", function(req, res) {
	res.send("<h1>Welcome to Star Wars Page!</h1>")	;
});

// Instead of hardcoded routes, use a variable
// as a placeholder for the specified character
// embedded in the url path within the GET request.

app.get("/:character", function(req, res) {
	var characterStr = req.params.character;
	var characterObj = characters[characterStr];

	if (characterObj) {
		res.json(characterObj);
	} else {
		res.send("Unknown character: " + characterStr);
	}
});

/*
app.get("/yoda", function(req, res) {
	console.log(typeof yoda);
	res.json(yoda);
});
*/

// Listener

app.listen(PORT, function() {
	console.log("Express server listening on PORT", PORT);
});
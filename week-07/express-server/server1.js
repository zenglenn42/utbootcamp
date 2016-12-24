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

// Routes

app.get("/", function(req, res) {
	res.send("<h1>Welcome to Star Wars Page!</h1>")	;
});

app.get("/yoda", function(req, res) {
	res.json(yoda);
});

app.get("/darthmaul", function(req, res) {
	res.json(darthmaul);
});

app.get("/lukeskywalker", function(req, res) {
	res.json(lukeskywalker);
});

// Listener

app.listen(PORT, function() {
	console.log("Express server listening on PORT", PORT);
});
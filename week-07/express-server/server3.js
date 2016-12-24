var express = require("express");
var bodyParser = require("body-parser");

var PORT = 3000;
var app = express();

// When adding server support for http POST methods,
// (for adding new Star Wars characters from the
// browser, for example) you need to parse the 
// associated body data.
//
// Configure body parsing middleware for our server.

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

// Character "database"

var yoda = {
	name: "Yoda",
	role: "Jedi Master",
	age: 900,
	forcePoints: 2000,
	routeName: "yoda"
};

var darthmaul = {
	name: "Darth Maul",
	role: "sith Lord",
	age: 200,
	forcePoints: 1200,
	routeName: "darthmaul"
};

var lukeskywalker = {
	name: "Luke Skywalker",
	role: "Jedi",
	age: 22,
	forcePoints: 900,
	routeName: lukeskywalker
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

// Add a route for adding a new character into our db.

app.post("/api/new", function(req, res) {
	var newCharacter = req.body;	// Implicitly parsed by body-parser i presume.
	newCharacter.routeName = newCharacter.name.toLowerCase().replace(/\s/g, '');
	var key = newCharacter.routeName;

	if (!characters[key]) {
		characters[key] = newCharacter;
		console.log("Added", newCharacter.name);
		res.json(newCharacter);
	} else {
		console.log(newCharacter.name + " is already in the character db");
		res.send(newCharacter.name + " already exists in the database");
	}
});

// Listener

app.listen(PORT, function() {
	console.log("Express server listening on PORT", PORT);
});

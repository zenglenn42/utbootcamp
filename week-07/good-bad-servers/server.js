var http = require("http"); // nodejs builtin module; handles rqst and resp

var AFFIRM_PORT = 7000;
var DISAFFIRM_PORT = 7500;

// Make two servers.
var affirmationServer = http.createServer(requestAffirmationCB);
var disaffirmationServer = http.createServer(requestDisaffirmationCB);

// Respond to client requests.
function requestAffirmationCB(request, response) {
	response.end(":-) You have the ability to empathize.");
}

function requestDisaffirmationCB(request, response) {
	response.end(":-( You tend toward self-centeredness.");
}

// Start accepting client connections.
affirmationServer.listen(AFFIRM_PORT, function() {
	console.log("affirmation server listening on http://localhost:%s", AFFIRM_PORT);
});

disaffirmationServer.listen(DISAFFIRM_PORT, function() {
	console.log("disaffirmation server listening on http://localhost:%s", DISAFFIRM_PORT);
});

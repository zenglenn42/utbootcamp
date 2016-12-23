var http = require("http"); // nodejs builtin module; handles rqst and resp
var PORT = 8080;

// Make a server.
var server = http.createServer(requestCB);

// Respond to client requests.
function requestCB(request, response) {
	response.end("It works.  Path hit (request.url) = " + request.url);
}

// Start accepting client connections.
server.listen(PORT, function() {
	console.log("server listening on http://localhost:%s", PORT);
});

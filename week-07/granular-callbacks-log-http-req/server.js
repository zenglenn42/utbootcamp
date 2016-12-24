var http = require("http");
var PORT = 8080;

var server = http.createServer(handleRequestCB);
server.listen(PORT, function() {
	console.log("server listening on port", PORT);
});

function handleRequestCB(req, res) {
	// Save off the incoming http request from the client
	// (i.e., Create/post, Read/get, Update/put, Delete/delete)

	var httpMethod = req.method.toLowerCase();
	var httpData = "";
	var output = "";

	// Granular request callbacks for incoming data
	// and end of incoming data ...

	req.on("data", function(data) {
		// Save off any body data associated 
		// with the incoming http request.
		httpData += data;
	});

	req.on("end", function() {
		// Format some output for display on the servers's
		// console.
		output = "Just received an http " + httpMethod + " request.\n";
		output += "Request data '" + httpData + "'";
		console.log(output);
		res.end();
	});
}

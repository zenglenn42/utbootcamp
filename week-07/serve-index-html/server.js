var http = require("http");
var fs = require("fs");
var PORT = 8080;

var server = http.createServer(handleRequestCB);

function handleRequestCB(req, res) {
	fs.readFile("index.html", function(err, data) {
		if (err) throw err;
		res.writeHeader(200, {"Content-Type":"text/html"});
		res.end(data);
	});
}

server.listen(PORT, function() {
	console.log("Server listening on port ", PORT);
});

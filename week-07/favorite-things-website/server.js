var http = require("http");
var url = require("url");
var fs = require("fs");
var PORT = 8080;
HTTP_SERVER_OK = 200;

var server = http.createServer(handleRequestCB);

server.listen(PORT, function() {
	console.log("web server listening on port", PORT);
});

function handleRequestCB(req, res) {
	var urlTokens = url.parse(req.url);
	var urlPath = urlTokens.pathname;
	displayPath(urlPath, res);
}

function displayPath(urlPath, res) {
	var defaultFile = "index.html";
	switch(urlPath) {
	case "/movies":
	case "/frameworks":
	case "/food":
		var filename = urlPath.split("/").pop() + ".html";
		break;
	case "/":
	default:
		filename = defaultFile;
		break;
	}
	fs.readFile(filename, function(err, data){
		if (err) throw err;
		res.writeHeader(HTTP_SERVER_OK, {"Content-Type":"text/html"});
		res.end(data);
	});
}

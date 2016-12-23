var http = require("http");
var url = require("url");
var PORT = 8080;
var HTTP_STATUS_OK = 200;
var HTTP_STATUS_NOT_FOUND = 404;

var server = http.createServer(handleRequestCB);

server.listen(PORT, function() {
	console.log("Server is listening on port", PORT);	
});

function handleRequestCB(req, res) {
	// Tokenize incoming url between base path and parameters.
	var urlParts = url.parse(req.url);
	var urlPath = urlParts.pathname;

	// Respond differently based upon incoming route/path.
	switch(urlPath) {
		case "/":
			displayRoot(urlPath, res);
			break;
		case "/portfolio":
			displayPortfolio(urlPath, res);
			break;
		case "/edit":
			console.log("Hit /edit route");
			res.end();
			break;
		default:
			display404(urlPath, res);
			break;
	}
}

function displayRoot(url, res) {
	var myHTML  = "<html>";
	myHTML += "<title>Simple Stack</title>";
	myHTML += "<body><h1>Welcome to my homepage.</h1>";
	myHTML += "<p><a href='/portfolio'>Portfolio</a></p>";
	myHTML += "</body>";
	myHTML += "</html>";
	res.writeHeader(HTTP_STATUS_OK, {"Content-Type": "text/html"});
	res.end(myHTML);
}

function displayPortfolio(url, res) {
	var myHTML  = "<html>";
	myHTML += "<title>Simple Stack</title>";
	myHTML += "<body><h1>My Portfolio</h1>";
	myHTML += "<p><a href='/'>Go Home</a></p>";
	myHTML += "</body>";
	myHTML += "</html>";
	res.writeHeader(HTTP_STATUS_OK, {"Content-Type": "text/html"});
	res.end(myHTML);
}

function display404(url, res) {
	var myHtml = "<h1>404 Not Found</h1>";
	res.writeHeader(HTTP_STATUS_NOT_FOUND, {"Content-Type": "text/html"});
	res.write(myHtml);
	res.end("The page you were looking for: " + url + " cannot be found.");
}

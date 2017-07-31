var http = require("http");
var nicejob = require('nicejob');

var PORT = 7500;

function handleRequest(request, responce){
	responce.end(nicejob.not());
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
	console.log("server listening on http://localhost:%s", PORT)
});
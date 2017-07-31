var http = require("http");
var nicejob = require('nicejob');

var PORT = 7000;

function handleRequest(request, responce){
	responce.end("<h1>"+nicejob()+"</h1>"+ "  "+ "<h1>"+nicejob()+"</h1>"+ "  "+"<h1>"+nicejob()+"</h1>"+ "  "+"<h1>"+nicejob()+"</h1>");


}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
	console.log("server listening on http://localhost:%s", PORT)
});
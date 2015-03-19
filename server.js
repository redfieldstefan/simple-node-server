// Create a simple http server using node. This server should respond to a root-url request with 
// a file called index.html. Do not use ExpressJS. Your code should have error checking and at 
// least one callback. Put five or more html elements in your index.html. 
// One of the elements should be a link to an external page. 
// Things to research: node.js, callbacks, the fs module, the http module.

'use strict';

var fs = require('fs');
var	http = require('http');
var	config = JSON.parse(fs.readFileSync('config.json'));
var	host = config.host;
var home = config.home;
var	port = config.port;

console.log('SERVER STARTING');

var server = http.createServer(function(request, response) {

	var filePath = request.url;
	if (filePath == '/') {
  		filePath = '/' + home;
	}
	var completePath = __dirname + filePath;

	console.log('Received request ' + request.url);
	fs.readFile(completePath, function(error, data) {
		if (error) {
			response.writeHead(404, { 'Content Type': 'text/plain' });
			response.end('UH OH!!! The file you requested was not found.');
		} else {
		 	response.writeHead(200, { 'Content Type': 'text/html' });
		 	response.end(data);
		 } 
	});

});

server.listen(port, host, function() {
	console.log('Server Listening at: ' + host + ':' + port);
});

fs.watchFile('config.json', function() {
	var config = JSON.parse(fs.readFileSync('config.json'));
	var host = config.host;
	var port = config.port;

	server.close();
	server.listen(port, host, function() {
		console.log('Changes made in config, now listening to: ' + host + ':' + port);
	});

});
const http = require('http')
	
http.createServer ( (request, response) => {
	response.writeHead(200, {'Content-type': 'text/html'});
	response.end(
		<h1>Hello World</h1><br/>
		<p>This is a node app</p>
	);
	
})
	
console.log('Server running at http://127.0.0.1:8124/')	
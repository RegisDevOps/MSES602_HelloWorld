const http = require('http');

const hostname = '127.0.0.1';
const port = 8082;

const server = http.createServer((req, res) => {
	  res.statusCode = 200;
	  res.setHeader('Content-Type', 'text/plain');
<<<<<<< HEAD
	  res.end('Hello World. My name is Evan D... I just changed this message for you\n');
=======
	  res.end('Hello World. My name is Tyler... I just changed this message for you\n');
>>>>>>> 1322dbf66dd547dd914e52507864fb128325ced3
});

server.listen(port, hostname, () => {
	  console.log(`Server running at http://${hostname}:${port}/`);
});


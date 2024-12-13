// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World!');
// }).listen(8080);


// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World!');
// }).listen(8080, () => {
//   console.log('Server is listening on http://localhost:8080');
// });

var http = require('http');

http.createServer(function (req, res) {
  // Set the response header
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // Routing logic
  if (req.url === '/') {
    res.end('Welcome to the homepage!');
  } else if (req.url === '/About') {
    res.end('This is the about page.');
  } else if (req.url === '/Contact') {
    res.end('This is the contact page.');
  } else {
   
    res.end('404 Not Found');
  }
}).listen(8080, () => {
  console.log('Server is listening on http://localhost:8080');
});


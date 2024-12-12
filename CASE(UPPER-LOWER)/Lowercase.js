const http = require('http');
http.createServer(async (req, res) => {
  const uc = await import('lower-case');
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(uc.lowerCase("Hello World!"));
  res.end();
}).listen(8080);
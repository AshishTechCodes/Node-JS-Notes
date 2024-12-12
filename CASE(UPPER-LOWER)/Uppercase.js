const http = require('http');
http.createServer(async (req, res) => {
  const uc = await import('upper-case');
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(uc.upperCase("Hello World!"));
  res.end();
}).listen(8080);
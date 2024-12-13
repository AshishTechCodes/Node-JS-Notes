const http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const tdate = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second  = date.getSeconds();

  const txt = "Year: "+year + "<br><br>Month: " + month+ "<br><br>Date: "+tdate+"<br><br>Hour: "+hour+"<br><br>Minute: "+minute+"<br><br>Seconds: "+second;
  res.end(txt);
}).listen(8080);
var http = require('http');
http.createServer(function (req,res){
res.writeHead(200,{'content-type':'text/plain'});
res.end('end of 2nd practical is here!')
}).listen(8080,()=>{
console.log('Visist the site http://localhost:8080/');
});
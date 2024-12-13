const http = require('http');
const port = 3000;
const EventEmitter = require('events');
const {error} = require('console');
const eventemitter = new EventEmitter();

eventemitter.on('error',(err)=>{
    console.log('error message occured:',err.message);
});
const server = http.createServer((req,res)=>{
    if(req.url==='/click' && req.method==='GET'){
        eventemitter.emit('error',new Error('button Clicked error'));
        res.writeHead(200,{'Content-Type':'Text/plain'});
        res.end('button clicked error emmitted.');
    }
    else{
        res.writeHead(404,{'Content-Type':'Text/plain'});
        res.end('not found');
    }
});
server.listen(port,()=>{
    console.log(`server is running on port http://localhost:${port}`);
});
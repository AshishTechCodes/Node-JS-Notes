const path = require('path');
const fs = require('fs');
const http = require('http');
const port = 3000;
const filePath = path.join(__dirname,'prac1.json')
const server = http.createServer(async(req,res)=>{
    try{
        await fs.promises.writeFile(filePath, 'Hello, world!');
        responseHTML += '<p>File written successfully!</p>';
    }
    catch(err){
        res.writeHead(500,{'content-type':'json/html'});
        res.end(`${err.message}`)
    }
});
server.listen(port,()=>{
    console.log(`http://localhost:${port}`);
});
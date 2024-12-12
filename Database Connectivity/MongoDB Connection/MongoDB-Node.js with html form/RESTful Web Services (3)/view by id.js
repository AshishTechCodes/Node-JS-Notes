var express = require('../../../node_modules/express'); 
var app = express(); 
var fs = require("fs"); 

app.get('/:id', function (req, res) { 
// First read existing users. 
fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) { 
var users = JSON.parse( data ); 
var user = users["user" + req.params.id]  
console.log( user ); 
res.end( JSON.stringify(user)); 
}); 
})
var server = app.listen(8081, function () { 
var port = server.address().port
console.log(`Example app listening at http://localhost:${port}`); 
})
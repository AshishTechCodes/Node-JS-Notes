var express = require('../../../node_modules/express'); 
var app = express(); 
var fs = require("fs"); 
app.get('/', function (req, res) { 
fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) { 
res.end( data ); 
}); 
}) 
var server = app.listen(8081, function () { 
var port = server.address().port
console.log(`Example app listening at http://localhost:${port}`); 
})
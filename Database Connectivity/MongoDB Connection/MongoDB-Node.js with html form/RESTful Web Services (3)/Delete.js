var express = require('../../../node_modules/express'); 
var app = express(); 
var fs = require("fs");  
app.get('/deleteUser/:id', function (req, res) { 
// First read existing users. 
fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) { 
data = JSON.parse(data); 
delete data["user"+req.params.id]; 
console.log(data); 
res.end( JSON.stringify(data)); 
}); 
})
var server = app.listen(8081, function () { 
    var port = server.address().port
    console.log(`Example app listening at http://localhost:${port}`); 
})
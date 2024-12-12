var express = require('../../../node_modules/express'); 
var app = express(); 
var fs = require("fs"); 
var user = { 
"user4" : { 
"name" : "mohit", 
"password" : "password4", 
"profession" : "teacher", 
"id": 4 
} 
} 
app.get('/addUser', function (req, res) { 
// First read existing users. 
fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) { 
data = JSON.parse( data ); 
data["user4"] = user["user4"]; 
console.log( data ); 
res.end( JSON.stringify(data)); 
});
});
var server = app.listen(8081, function () { 
    var port = server.address().port
    console.log(`Example app listening at http://localhost:${port}`); 
})
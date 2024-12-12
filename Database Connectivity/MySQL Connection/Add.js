var express = require('../node_modules/express'); 
var app = express(); 
var ejs = require('../node_modules/ejs'); 
var mysql = require('../node_modules/mysql');
var bodyParser = require('../node_modules/body-parser'); 
app.use(bodyParser.urlencoded({ extended: true }));  
var con = mysql.createConnection({ 
host: "localhost", 
user: "root", 
password: "", 
database: "ashish" 
}); 
app.get('/',function(req,res,next){ 
res.sendfile('index.html');
}); 
app.post('/add', function(req, res)  
{ 
console.log('req.body'); 
console.log(req.body); 
res.write('You sent the name "' + req.body.name+'".\n'); 
res.write('You sent the Email "' + req.body.email+'".\n'); 
res.write('You sent the City "' + req.body.city+'".\n'); 
res.write('You sent the Pincode "' + req.body.pincode+'".\n'); 
res.end() 
con.connect(function(err) { 
if (err) throw err; 
var sql = "INSERT INTO info (name, email,city,pincode) VALUES ('"+req.body.name+"', '"+ req.body.email+"','"+req.body.city+"','"+req.body.pincode+"')"; 
con.query(sql, function (err, result) { 
if (err) throw err; 
console.log("1 record inserted"); 
res.end(); 
}); 
}); 
}); 
app.listen(3000); 
console.log('Example app listening at port:3000');
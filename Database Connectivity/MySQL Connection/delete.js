var express = require('express');
var app = express();
var ejs = require('ejs');
var mysql = require('mysql');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); 
var con = mysql.createConnection({
 host: "localhost",
 user: "root",
 password: "",
 database: "ashish"
 });
app.get('/',function(req,res,next){
 res.sendfile('Delete.html');
});
app.post('/delete', function(req, res) 
{
console.log('req.body');
console.log(req.body);
res.write('You sent the ID "' + req.body.id+'".\n');
res.end()
con.connect(function(err) {
 if (err) throw err;
 var sql = "delete from info where id='"+req.body.id+"'";
 con.query(sql, function (err, result) {
 if (err) throw err;
 console.log("1 record deleted");
 res.end();
 });
 });
});
app.listen(3000);
console.log('Example app listening at port:3000');
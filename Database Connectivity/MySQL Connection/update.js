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
 res.sendfile('Update.html');
});
app.post('/update', function(req, res) 
{
console.log('req.body');
console.log(req.body);
res.write('You sent the ID "' + req.body.id+'".\n');
res.write('You sent the name "' + req.body.name+'".\n');
res.write('You sent the Email "' + req.body.email+'".\n');
res.write('You sent the City "' + req.body.city+'".\n');
res.write('You sent the Pincode "' + req.body.pincode+'".\n');
res.end()
con.connect(function(err) {
 if (err) throw err;
 var sql = "update info set name='"+req.body.name+"',email='"+ req.body.email+"',city='"+req.body.city+"',pincode='"+req.body.pincode+"' where id='"+req.body.id+"'";
 con.query(sql, function (err, result) {
 if (err) throw err;
 console.log("1 record updated");
 res.end();
 });
 });
});
app.listen(3000);
console.log(`http:\\localhost:3000`);
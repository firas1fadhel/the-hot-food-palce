var express= require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app =  express();

var PORT = 3000;


var customer = [{
  routeName: " ",
  name: " ",
  phone: " ",
  email: " ",
  uniqueID: " "}];

// app.get('/', function (req, res) {
//  res.send('Welcome to hot-restaurant!')
// })

app.listen(3000, function () {
 console.log('Hot-restaurant!')
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reservation", function(req, res) {
  res.sendFile(path.join(__dirname, "reservation.html"));
});

app.get("/table", function(req, res) {
  res.sendFile(path.join(__dirname, "list.html"));
});
//
// // Get all customers
// app.get("/data", function(req, res) {
//   res.json(customers);
// });
//
// app.get("/api/:customers?", function(req, res) {
//   var chosen = req.params.customers;
//
//   if (chosen) {
//     console.log(chosen);
//
//     for (var i = 0; i < customers.length; i++) {
//       if (chosen === customers[i].routeName) {
//         return res.json(customers[i]);
//       }
//     }
//     return res.json(false);
//   }
//   return res.json(customers);
// });
//
// // Create New Characters - takes in JSON input
// app.post("/api/new", function(req, res) {
//   var newcustomer = req.body;
//   newcustomer.routeName = newcustomer.name.replace(/\s+/g, "").toLowerCase();
//
//   console.log(newcustomer);
//
//   characters.push(newcustomer);
//
//   res.json(newcustomer);
// });

//
// // app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.get('/',function(req,res){
//   res.sendfile("index.html");
// });
// app.post('/login',function(req,res){
//   var user_name=req.body.user;
//   var password=req.body.password;
//   console.log("User name = "+user_name+", password is "+password);
//   res.end("yes");
// });
// app.listen(3000,function(){
//   console.log("Started on PORT 3000");
// });

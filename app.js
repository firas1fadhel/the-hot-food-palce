// "customer":
// {
//   "routeName": "",
//   "name": "",
//   "phone": "",
//   "email": "",
//   "uniqueID": ""
// }
//need constructor for customer data

var customer = [{
  routeName: " ",
  name: " ",
  phone: " ",
  email: " ",
  uniqueID: " "}];

var name = "";
var phone = "";
var email = "";
var uniqueID = "";


$("#formSubmit").on(click, function(){

   name = $("#name").val().trim();
   phone = $("#phone").val().trim();
   email = $("#email").val().trim();
   uniqueID = $("#uniqueID").val().trim();

   new Customer = (name, phone, email, uniqueID);
   console.log(Customer);

})




function Customer(name, phone, email, uniqueID) {

 // Note that we don't create a new object...
  if (this instanceof Customer){
   this.name = name;
   this.phone = phone;
   this.email = email;
   this.uniqueID = uniqueID
}
 else {
   return new User(name, phone, email, uniqueID)
 }
  // ...Or include a return statement.
}

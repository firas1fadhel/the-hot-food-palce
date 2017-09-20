// "customer":
// {
//   "routeName": "",
//   "name": "",
//   "phone": "",
//   "email": "",
//   "uniqueID": ""
// }
//need constructor for customer data

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

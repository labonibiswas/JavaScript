"use strict" //treat all js code as newer version

/* alert("hello") 
we can define alert in this way only on browser
but we r using node.js will have diffrent way of doing so
*/

let name = "laboni"
let age = 5
let isLoggedIn = false

// primitive data types
// number, boolean, string, null, symbol

//null is stand alone value
//undefined means value is not assigned yet
//symbol is used for uniqueness


// object

//console.log(typeof undefined) // output: undefiend
//console.log(typeof null) // output: object (null is data type in js)

// ************************************ memory(stack and heap) *********************************************************

let name1 = "laboni biswas";

let anothername = name1; // a copy of name1 is assigned to anothername
console.log(anothername);

anothername = "rekha biswas";

console.log(anothername);
console.log(name1);

let user = {name : "krish", email : "abc@gmail.com"};
console.log("before");
console.log(user);

let user2 = user;   // reference of user is given
user2.email = "xyz@gmail.com"; // change occurs in the original object 

console.log("after");
console.log(user);
console.log(user2);
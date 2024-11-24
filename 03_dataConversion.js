let score = 33;

//console.log(typeof score) //we can print value of score linke this or as a method
//console.log(typeof (score))

let str = "66";

//let valueInNummber = Number(str); // conver string type to number type
//console.log(typeof valueInNummber); // this line will give number output

let str2 = "99abc";

let valueInStr2 = Number(str2); // conver string type to number type
//console.log(typeof valueInStr2); // this line will give number output although str2 is not completely a number
//console.log(valueInStr2); // this line will give output as NaN(not a number) but it's(str2) type is number

let nothing = null;
//console.log(typeof nothing); // null is object type

let bool = 1;
//console.log(typeof bool);

let booleanType = Boolean(bool); // convert number to boolean(true)

//console.log(typeof booleanType); //boolean type
//console.log(booleanType); //output is true

let empty = "";
let convertEmpty = Number(empty) // convert empty string to number
//console.log(convertEmpty); // output is 0 (false in case of boolean)

let name = "laboni";
//console.log(typeof name);

let convertName = Boolean(name);
//console.log(typeof convertName);
//console.log(convertName);

let Num = 22;

let convertNum = String(Num); // convert number into string
//console.log(convertNum);
//console.log(typeof convertNum);

// **************************************  operation *******************************************


let value = 3;
let negValue = -value;
//console.log(negValue);

let strA = "hello";
let strB = " laboni";
//console.log(strA + strB);

//console.log("1" + 2); //12
//console.log(1 + "2"); //12
//console.log("1" + 2 + 2); //122
//console.log(1 + 2 + "3"); //33


/* When evaluating expressions, JavaScript processes them left to right (associative order). 
At each step:

If at least one operand is a string, it coerces the other operand to a string and performs string concatenation.
If both operands are numbers, it performs numeric addition. */ 

console.log(+true); //The + operator, when used as a unary operator, tries to convert its operand into a number then 1 is recived as output.
//console.log(true+); // true+ is incomplete syntax, as the binary + must be followed by another value.

console.log(true + 2); //3

/* JavaScript does not automatically convert strings or numbers into booleans when performing operations.
 Instead, JavaScript follows specific rules for type coercion, which vary depending on the operator being used. */

/* The + operator in JavaScript has two roles:

Numeric addition, if both operands are numbers.
String concatenation, if either operand is a string. */
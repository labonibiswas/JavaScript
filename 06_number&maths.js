//Number Methods
//Converting Numbers
//toString(base): Converts a number to a string in the specified base.

let num = 255;
console.log(num.toString(16)); // Output: "ff" (hexadecimal)

//toFixed(): Rounds a number to a fixed number of decimal places.
let num2 = 5.6789;
console.log(num.toFixed(2)); // Output: 5.68

//toPrecision(): Formats a number to a specific length.
let num3 = 123.456;
console.log(num.toPrecision(4)); // Output: 123.5

//Checking Numbers
//Number.isNaN(): Checks if the value is NaN.
console.log(Number.isNaN(NaN)); // Output: true, Strictly checks if the value is NaN.
console.log(Number.isNaN(123)); // false


/* isNaN():
Loosely checks if a value is not a valid number after coercion.
It may consider non-numeric strings, undefined, etc., as NaN. */

console.log(isNaN(NaN));        // true
console.log(isNaN("abc"));     // true (non-numeric string)
console.log(isNaN(undefined)); // true


/********************************* mathamatical fuction **********************/

//Math Object: A built-in object that provides mathematical constants and functions.

//Common Math Methods

//1. Rounding
//Math.round(): Rounds to the nearest integer.
console.log(Math.round(4.6)); // Output: 5
console.log(Math.round(4.4)); // Output: 4

//Math.ceil(): Rounds up to the nearest integer.
console.log(Math.ceil(4.1)); // Output: 5

//Math.floor(): Rounds down to the nearest integer.
console.log(Math.floor(4.9)); // Output: 4

//Math.trunc(): Truncates the decimal part.
console.log(Math.trunc(4.9)); // Output: 4

//2. Absolute Value
//Math.abs(): Returns the absolute value.
console.log(Math.abs(-4.7)); // Output: 4.7

//3. Power and Roots
//Math.pow(base, exponent): Raises base to the power of exponent.
console.log(Math.pow(2, 3)); // Output: 8

//Math.sqrt(): Returns the square root.
console.log(Math.sqrt(16)); // Output: 4

//Math.cbrt(): Returns the cube root.
console.log(Math.cbrt(27)); // Output: 3

//Random Numbers
//Math.random(): Generates a random number between 0 and 1 (excluding 1).
console.log(Math.random()); // Output: Random number like 0.345678

//To generate random integers in a range:
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 10)); // Output: Random number between 1 and 10

//Max and Min
//Math.max(): Returns the largest number from the arguments.
console.log(Math.max(1, 3, 2)); // Output: 3

//Math.min(): Returns the smallest number from the arguments.
console.log(Math.min(1, 3, 2)); // Output: 1



/* a string is a sequence of characters used to represent text.
 Strings are one of the primitive data types and are immutable, meaning they cannot be changed after they are created 
 (though variables containing strings can be reassigned).
*/

let str = "laboni" //string can be used with single and double quotes
let str2 = "biswas"


// string interpretation
console.log(`hello , my name is ${str} and my surname is ${str2}`);

//String Properties
//length: Returns the number of characters in the string
console.log(str.length);

/* string Methods */

//1. Case Conversion

console.log(str.toUpperCase); //Converts string to uppercase.
console.log(str.toLowerCase); //Converts string to lowercase.

//2. Searching
//.indexOf(substring): Returns the index of the first occurrence of a substring. Returns -1 if not found.

console.log(str.indexOf("b"));

//.includes(substring): Returns true if the substring is found.

console.log(str.includes("boni"));

//3. Extracting
//.slice(start, end): Extracts a part of the string.

console.log(str.slice(1, 2));

//.substring(start, end): Similar to .slice(), but does not accept negative indices.

console.log(str.substring(4,5));

//.substr(start, length): Extracts a substring of a specified length.
console.log(str.substr(2, 6));

//4. Replacing

//.replace(searchValue, newValue): Replaces the first occurrence of searchValue with newValue.
let text = "hello, world!";
console.log(text.replace("world", "javascript"));


//.replaceAll(searchValue, newValue): Replaces all occurrences.
let text2 = "Hello, world! Hello, everyone!";
console.log(text2.replaceAll("Hello","hi"));

//5. Splitting

//.split(separator): Splits the string into an array based on the separator.
console.log(text.split(","));

//6. Trimming
//.trim(): Removes whitespace from both ends of the string.
let text3 = "      hello, world";
console.log(text3);
console.log(text3.trim());

//7. Concatenation
//.concat(): Joins two or more strings.
console.log(str.concat(" ",str2," here"));
console.log(`${str} ${str2}`); // other way 


//Immutability of Strings
str[0] = "L"; // won't change the string
console.log(str);

/* Escaping Special Characters
Certain characters in strings need to be "escaped" with a backslash (\) so they are treated as part of the string:

\' for single quote
\" for double quote
\\ for backslash
\n for newline
\t for tab */

let example = "Here\'s a \"complete\" list of special characters:\n" + // Single and double quotes with newline
"1. Backslash: \\\n" +                  // Backslash
"2. Newline: This text is on a new line.\n" + // Newline
"3. Tab:\tIndented text using a tab.\n" +    // Tab
"4. Carriage Return:\rThis text overwrites previous line.\n" + // Carriage return
"5. Backspace: Text\bRemoved\n" +       // Backspace
"6. Form Feed:\fThis is on a new form feed.\n" + // Form feed
"7. Unicode Heart: \u2764";             // Unicode heart symbol

console.log(example);

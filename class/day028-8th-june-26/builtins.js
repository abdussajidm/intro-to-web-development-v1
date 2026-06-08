// built-ins

// built in objects. 
// objects have properties and functions. 
// functions are also called methods when they are properties of an object.

/* 
built-in objects and functions in JavaScript are pre-defined objects and functions that are available for use
in any JavaScript environment.
These built-in objects and functions provide a wide range of functionality, 
from basic data manipulation to complex mathematical operations, and are an essential part of the JavaScript language.
*/

// Some common built-in objects in JavaScript include:
// console
// document
// window
// Math
// Date
// String
// Array
// Object
// Number
// Boolean
// RegExp
// JSON

// Use vs code editor or chrome console to explore the properties of the objects,
// go through mdn for documentation & to look up more built-in objects and functions.

// built-in functions in objects.

// console is a built-in object in JavaScript that 
// provides access to the browser's debugging console.
console.log("Hello, World!");
// log is a built-in function that prints the argument to the console
console.log("The sum of 2 and 3 is:", 2 + 3);
// we can pass multiple arguments to console.log, it will print them all separated by a space


// string built-in functions
const myString = "Hello, World!";
console.log(myString.length);

const sentence = "ThIs HaS wEiRd CaSiNg On It";
const lowerCaseSentence = sentence.toLowerCase();
console.log(lowerCaseSentence);

// want to see if a string contains another string?
const testStringOne = "The quick brown fox jumps over the lazy dog";
const testStringTwo =
    "Mirror, mirror on the wall, don't say it cause I know I'm cute";
const stringToLookFor = "cute";

console.log(testStringOne.includes(stringToLookFor));
console.log(testStringTwo.includes(stringToLookFor));

// math object - built-in functions
console.log(Math.PI); // returns the value of pi
console.log(Math.E); // returns the value of e
console.log(Math.max(5, 10, 15)); // returns the maximum value among the arguments
console.log(Math.min(5, 10, 15)); // returns the minimum value among the arguments
console.log(Math.random()); // returns a random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.floor(3.7)); // rounds down to the nearest integer, returns 3
console.log(Math.ceil(3.2)); // rounds up to the nearest integer, returns 4
console.log(Math.round(3.5)); // rounds to the nearest integer, returns 4
console.log(Math.round(3.4)); // rounds to the nearest integer, returns 3
console.log(Math.pow(2, 3)); // returns the value of 2 raised to the power of 3, returns 8
console.log(Math.sqrt(16)); // returns the square root of 16, returns 4

// want to know how many milliseconds have elapsed since Jan 1 1970?
console.log(Date.now());

// use vs code or mdn to look up more built-in functions.


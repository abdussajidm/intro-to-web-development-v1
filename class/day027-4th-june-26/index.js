// functions in JS.

//A function is a bit of re-usable code. Just how we like to re-use CSS classes.

function addTwo(number) {
    return number + 2;
}
const finalAnswer = addTwo(5);
console.log(finalAnswer);


// function declaration
function add(a, b) {
    return a + b;
}
console.log(add(2, 3));
console.log(add(10, 15));


// parameters and arguments, what is the difference?
// parameters are the variables defined in the function declaration, 
// while arguments are the actual values passed to the function when it is called.

function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet('Zaki'));

function greeting(firstName, lastName, honorific, greeting) {
    return `${greeting} ${honorific} ${lastName}! 
    I’m extremely pleased you could join us, ${firstName}.! 
    I hope you enjoy your stay, ${honorific} ${lastName}.`;
}

console.log(greeting("Shaik", "Zubair", "Mr.", "Assalamu Alaikum"));

// here order of parameters matters, 
// if we change the order of arguments when calling the function, 
// it will produce a different output.

const myHomeCity = "Hyderabad";
const myHomeState = "Telangana";
const myHomeCountry = "India";

function logOutYourHome(city, state, country) {
    console.log(`You are from ${city}, ${state} ${country}.`);
}

logOutYourHome(myHomeCity, myHomeState, myHomeCountry);
// a variable with parentheses after it, is a function, 
// inside the parentheses are the arguments we are passing to the function

// There are a few ways to write functions that are mostly the same 
// (there are some differences but for now don't worry about it.)

// function expression
const subtract = function (a, b) {
    return a - b;
};
console.log(subtract(5, 2));

// arrow function
const multiply = (a, b) => a * b;
console.log(multiply(4, 6));


// questions
// 1. What is the basic definition of a function in JavaScript?
// A function is a reusable block of code that performs a specific task. It can take inputs (parameters), execute a series of statements, and return an output (result). Functions help in organizing code, improving readability, and allowing for code reuse throughout a program.

// 2. What is the difference between parameters and arguments in a function?
// 3. How do you declare a function using a function declaration, function expression, and arrow function?
// 4. Can you explain how the order of parameters and arguments affects the output of a function?
// 5. What syntax is used to call a function in JavaScript?
// A function is called by using its name followed by parentheses. If the function requires parameters, you can pass the arguments inside the parentheses. 


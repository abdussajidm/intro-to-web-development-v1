// scope in JavaScript

// scope is the area where a variable is defined and can be accessed.
// there are two types of scope: global scope and local scope.

// global scope is the area outside of any function, where variables can be accessed from anywhere in the code.
const globalVariable = "I am a global variable";

function logGlobalVariable() {
    console.log(globalVariable);
}
logGlobalVariable(); // Output: I am a global variable

// local scope is the area inside a function, where variables can only be accessed within that function.
function logLocalVariable() {
    const localVariable = "I am a local variable";
    console.log(localVariable);
}
logLocalVariable(); // Output: I am a local variable
// console.log(localVariable); // This will throw an error because localVariable is not defined in the global scope.

let friendsAtYourParty = 0;
// let i;
for (let i = 0; i <= 10; i++) {
    friendsAtYourParty++;
    console.log('i value:', i)
}
// console.log(i);
// This will throw an error because `i` is not defined in the global scope, it is only defined within the for loop block.
// variable is "alive" (in scope)


const A = "A";
let F;

function doStuff(B) {
    console.log(B); // works, B parameter is still in scope
    const C = "C";
    let H = "H";
    if (1 + 1 === 2) {
        const D = "D";
        // H = "something else";
    }
    // console.log(D); // does not work, D was declared in that if statement block
    console.log(H); // works, H was declared outside the if statement
    F = "F";
}

let E = 0;
while (E < 3) {
    E++;
    console.log(A); // works, the outter block (called the global scope) is still in scope
    const G = "G";
}
console.log(E); // works, E was declared outside the whie loop
// console.log(G); // does not work, declared inside the while loop and it's over

doStuff("B");
// console.log(B); // does not work, the B parameter expires after the function call
// console.log(C); // does not work, C was declared inside the function and the function is over
console.log("F:", F); // works, F was declared in the global scope

let goldPrice;
console.log(goldPrice)
goldPrice = 1800;
// This will throw an error because goldPrice is 'not defined' at the time of the console.log statement. 


saySalam();
function saySalam() {
    console.log("Assalamu Alaikum");
}
// This will work because function declarations are hoisted to the top of their scope, 
// so the saySalam function is available before it is called.
// function declarations are hoisted, but function expressions and arrow functions are not hoisted in the same way.

// questions on scope
// 1. What is the difference between global scope and local scope?
// 2. Can a variable defined in a function access variables defined in the global scope?
// A. Yes, a variable defined in a function can access variables defined in the global scope, but not vice versa.

// 3. Can a variable defined in a function access variables defined in another function?
// A. No, a variable defined in a function cannot access variables defined in another function, 
// unless they are nested functions and the inner function can access the variables of the outer function.

// 4. What happens when you try to access a variable that is not in scope?
// A. It will throw a ReferenceError because the variable is not defined in the current scope or any of its parent scopes.



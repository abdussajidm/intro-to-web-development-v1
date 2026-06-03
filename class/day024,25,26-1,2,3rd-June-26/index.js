
// loops in js
// if I want do one thing multiple times? 
let friendsAtYourParty = 0;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;
console.log("friendsAtYourParty", friendsAtYourParty);

/* 
we used let here.
if we use const, it will give an error because we cannot reassign a value to a constant variable.
*/

// we can use while loop to do the same thing as above. 
friendsAtYourParty = 0;
while (friendsAtYourParty < 10) {
    console.log(friendsAtYourParty);
    friendsAtYourParty = friendsAtYourParty + 1;

}
console.log(friendsAtYourParty);

/*
we can use while loop to do the same thing as above. 
the while loop will continue to execute the block of code as long as the condition is true. 
in this case, it will continue to execute until friendsAtYourParty is less than 10. 
once it reaches 10, the condition will be false and the loop will stop executing.  
*/

// another way to do the same thing is to use a for loop.
friendsAtYourParty = 0;
for (let i = 0; i < 10; i++) {
    console.log("i", i, "friendsAtYourParty", friendsAtYourParty);
    friendsAtYourParty++;
}
console.log(" abcd:", friendsAtYourParty);
// An important note: in coding, we start counting from 0. 

// infinite loop
// friendsAtYourParty = 1;
// while (friendsAtYourParty > 0) {
//     friendsAtYourParty = friendsAtYourParty + 1;
// }
// console.log(friendsAtYourParty);


// task:
// Write some code that declares two variables, character and timesToRepeat.
// Using a loop, repeat that character that many times and then console.log it.
// Example, if I had character = 'f' and timesToRepeat = 5, it'd console.log 'fffff'.

let character = '⭐';
let timesToRepeat = 5;
// write your code here







// you can also use the built-in string method repeat(), padStart() 
// to achieve the same result without using a loop.
// "⭐".repeat(5) // "⭐⭐⭐⭐⭐"
// "".padStart(timesToRepeat, character) // "⭐⭐⭐⭐⭐"






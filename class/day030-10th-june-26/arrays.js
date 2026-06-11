// arrays in JavaScript

// Objects are un-ordered collections of data using keys and values. 
// Arrays, in contrast, are ordered collections of data. 
// If you put something in an array, it has an order. 
// For example, you might a list of the days of the week.
const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];
console.log(daysOfWeek[0]); // Output: "Monday". the first element is index 0.
console.log(daysOfWeek[6]); // Output: "Sunday"

// Arrays are useful when you want to store a list of items in a specific order and access them by their index. 
// Objects are useful when you want to store data that is related to each other and access it using keys.

// Arrays can hold any type of data, including numbers, strings, objects, and even other arrays. 
// Arrays have a special property called length that keeps track of the number of elements in the array.

const myArray = [1, 2, 3, "hello", { name: "Alice" }, [4, 5]];
console.log(myArray.length); // Output: 6

// we can access elements in an array using their index, which starts at 0.
console.log(myArray[0]); // Output: 1
console.log(myArray[3]); // Output: "hello"
console.log(myArray[4].name); // Output: "Alice"
console.log(myArray[5][1]); // Output: 5

// we can modify elements in an array by assigning a new value to a specific index.
myArray[1] = "world";
console.log(myArray[1]); // Output: "world"

// arrays have many built-in methods that allow us to manipulate and work with the data they contain. 
// Some common array methods include push, pop, shift, unshift, slice, splice, indexOf, and forEach.

// let's see some examples of these methods in action.
const numbers = [1, 2, 3];
numbers.push(4); // adds 4 to the end of the array
console.log(numbers); // Output: [1, 2, 3, 4]
numbers.push(5, 6); // adds 5 and 6 to the end of the array
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6]

// numbers[2] = 10; // modifies the element at index 2
// console.log(numbers); // Output: [1, 2, 10, 4, 5, 6]

numbers.pop(); // removes the last element from the array
console.log(numbers); // Output: [1, 2, 3]

numbers.unshift(0); // adds 0 to the beginning of the array
console.log(numbers); // Output: [0, 1, 2, 3]

numbers.shift(); // removes the first element from the array
console.log(numbers); // Output: [1, 2, 3]

const slicedNumbers = numbers.slice(1, 3); // creates a new array with elements from index 1 to 2
console.log(slicedNumbers); // Output: [2, 3]

numbers.splice(1, 1); // removes 1 element at index 1
console.log(numbers); // Output: [1, 3]

console.log(numbers.indexOf(3)); // Output: 1

const primeNumbers = [1, 2, 3, 5, 7, 11, 13, 17];
console.log(primeNumbers.length);
console.log(primeNumbers.join(" | "));


// we can also use the forEach method to iterate over the elements of an array and perform a function on each element.
const cities = [
    "Seattle",
    "San Francisco",
    "Salt Lake City",
    "Amsterdam",
    "Hong Kong",
];

// method 1
for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}

// method 2
cities.forEach(function (city) {
    console.log(city);
});

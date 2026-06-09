// objects in JavaScript

/* objects are a collection of key-value pairs. They are used to store data and functions together in a single entity. 
// They're extremely useful in JavaScript; they're how you'll group together like-information so that they can be used together. 
// They contain a bunch of keys and values. 
// The keys are on the left side of the : and represent how you get that piece of data out of the object.
*/

const person = {
    name: "Arshad Shaikh",
    city: "Karimnagar",
    state: "Telangana",
    favoriteFood: "biryani",
    wantsBiryaniRightNow: true,
    numberOfBiryaniHandiWanted: 2,
};
console.log(person);
console.log(person.name);

// same as the line above; prefer using this one because it allows us to access properties with spaces 
// in their names or properties that are not valid identifiers.
console.log(person["name"]);

const propertyName = "city";
console.log(person[propertyName]); // this is how we can access properties using variables.



const person1 = {
    name: "Zaki",
    interests: "coding"
};
const person2 = {
    name: "Sajid",
    interests: "video editing"
};

function suggestLaptop(person) {
    if (person.interests === "coding") {
        console.log("We think you will like a MacBook Air");
    } else if (person.interests === "video editing") {
        console.log("You are obviously going to want a MacBook Pro");
    } else {
        console.log(
            "Uh, maybe try a windows laptop..."
        );
    }
}

suggestLaptop(person1);
// we're able to pass all this information as one package (object) which makes it easy to keep track of and use together.
suggestLaptop(person2);

// Objects can even have their functions! Let's see that.
const horse = {
    name: "buraq",
    speak() {
        console.log("neigh neigh");
    },
    eat() {
        console.log("The horse eats hay and grass");
    }
};

horse.speak();
// horse.eat();

// Objects can as well have nested objects inside of them.
const user = {
    name: {
        first: "Maaz",
        last: "Mohammed",
    },
    location: {
        city: "Warangal",
        state: "Telangana",
        country: "India",
    },
};

console.log(user.name.first);
console.log(user.location.state);

// Q. What happens when you try to create two keys with the same name in an object?
// A. The last key will overwrite the previous key with the same name.

// Q. Can you have a function as a value in an object?
// A. Yes, you can have a function as a value in an object. This is called a method.

// Q. What happens when accessing an object property that does not exist?
// A. It will return undefined.

// Q. can we modify the properties of an object after it has been created?
// A. Yes, we can modify the properties of an object after it has been created. 
// We can use dot notation or bracket notation to change the values of existing properties or add new properties to the object.

user.location.zipCode = 500087; // modifying an existing property
user.location.country = "Iran"; // modifying an existing property
user.interests = ["coding", "teaching"]; // adding a new property
console.log(user);

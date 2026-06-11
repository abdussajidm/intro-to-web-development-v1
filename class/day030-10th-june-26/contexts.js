// contexts in javascript

// context refers to the value of the 'this' keyword in a function. 
// The value of 'this' is determined by how a function is called. 
// It can refer to different objects depending on the context in which the function is executed.

// In the global context, 'this' refers to the global object (window in browsers, global in Node.js).
console.log(this); // In browsers, this will log the window object

// In a function context, 'this' refers to the object that the function is a property of.

let me = {
    name: {
        first: "Sameer",
        last: "Khan",
    },
    location: {
        addressLine1: "Dargah Khaleej Khan, Kismathpur",
        city: "Hyderabad",
        state: "Telangana",
        zipCode: 500086,
        country: "India",
    },
    getAddress() {
        return `${this.name.first} ${this.name.last}
${this.location.addressLine1}
${this.location.city}, ${this.location.state} ${this.location.zipCode}
${this.location.country}`;
    },
};

console.log(me.getAddress());

// Q. how to access properties of an object inside a function that is a property of the same object?
// A. The 'this' keyword refers to the object that the function is a property of. 
// In this case, it refers to the `me` object. 
// So when we call `me.getAddress()`, `this` inside the `getAddress` function 
// refers to the `me` object, allowing us to access its properties.


// anywhere you are in JavaScript you have a context you are in. 
// You can reference that context by using this. If I just reference this from the outtermost layer, 
// it'll be the global object, which in the browser is something called window.
// console.log(this === window);
// console.log(this.scrollY);
// console.log(window.scrollY);


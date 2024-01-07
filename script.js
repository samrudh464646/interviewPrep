// Creating an object using object literal syntax
let myObject = {
    a: 10,
    b: 20
};

// Accessing properties directly on the object
console.log(myObject.a); // Output: 10
console.log(myObject.b); // Output: 20

var n = 123;
console.log(typeof n)

n = n.toString();
console.log(typeof n)
// Accessing properties through the prototype chain
console.log(myObject.toString2()); // Output: [object Object]
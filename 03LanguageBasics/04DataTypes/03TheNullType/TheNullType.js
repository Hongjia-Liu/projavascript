let car = null;
console.log(typeof car); // "object"

if (car != null) {
  // do something with car
}

console.log(null == undefined); // true

// null and undefined are falsy values
let message = null;
let age;
if (message) {
  // This block will not execute
}
if (!message) {
  // This block will execute
}
if (age) {
  // This block will not execute
}
if (!age) {
  // This block will execute
}

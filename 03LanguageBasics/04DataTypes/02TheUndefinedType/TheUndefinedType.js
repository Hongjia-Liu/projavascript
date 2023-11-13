// The Undefined type has only one value, which is the special value undefined.

/**
 * When a variable is declared using var or let but not initialized, it is assigned the value of
 * undefined as follows:
 */

let message;
console.log(message == undefined); // true

/**
 * The typeof operator returns “undefined” when called on an uninitialized variable, but it also
 * returns “undefined” when called on an undeclared variable, which can be a bit confusing.
 */

console.log(typeof message); // "undefined"
console.log(typeof age); // "undefined"

/**
 *  The value undefined is falsy;
 */

if (message) {
  // This block will not execute
}
if (!message) {
  // This block will execute
}
if (age) {
  // This will throw an error
}

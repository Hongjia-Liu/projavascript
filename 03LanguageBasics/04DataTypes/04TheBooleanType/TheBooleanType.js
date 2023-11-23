let found = true;
let lost = false;

let message = "Hello world!";
let messageAsBoolean = Boolean(message);

/**
 * flow-control statements, such as the if statement,
 * automatically perform Boolean conversion
 */
if (message) {
  console.log("Value is true");
}

// All types of values have Boolean equivalents in ECMAScript.
console.log(Boolean("")); // false
console.log(Boolean(+0)); // false
console.log(Boolean(0)); // false
console.log(Boolean(-0)); // false
console.log(Boolean(0n)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean({})); // true
console.log(Boolean([])); // true
console.log(Boolean(Symbol())); // true
console.log(Boolean(Infinity)); // true
console.log(Boolean(-Infinity)); // true

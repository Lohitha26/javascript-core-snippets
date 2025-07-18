//Hoisting is JavaScript’s internal process during the compilation phase (before your code runs), where it pulls all declarations (variables + functions) to the top of their scope.
// 🔼 Example 1: Variable hoisting with var
console.log(a); // undefined
var a = 5;

// 🔼 Example 2: let and const (Temporal Dead Zone)
try {
  console.log(b); // ReferenceError
} catch (err) {
  console.log("Error:", err.message);
}
let b = 10;

// 🔼 Example 3: Function hoisting
greet(); // Works
function greet() {
  console.log("Hello, Bangaram!");
}

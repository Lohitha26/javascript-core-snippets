// 🔁 Example 1: Closure with Counter
//A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment)
// This function demonstrates a classic use of closures in JavaScript.
// The inner function remembers the 'count' variable even after 'createCounter()' has finished execution.

function createCounter() {
  let count = 0; // 'count' is defined in the outer function's scope

  return function () {
    // This inner function forms a closure and has access to 'count'
    count++; // Increments the preserved value
    return count; // Returns updated count
  };
}

// We now call createCounter() once, which returns the inner function.
const counter = createCounter();

console.log(counter()); // 1 👉 'count' was 0, incremented to 1
console.log(counter()); // 2 👉 'count' is now 1, incremented again

// 🧠 Why this is cool:
// 'count' is private — you can’t access it directly from outside.
// Each call to counter() keeps modifying the same preserved value.

// 🔁 Example 2: Closure for Private Variable Access

// This function returns an object with a method that can access the 'secret' variable.
// 'secret' is completely private — only the getSecret() method can access it.

function SecretHolder(secret) {
  // 'secret' is scoped to this outer function

  return {
    getSecret: function () {
      // Inner function forms a closure and can access 'secret'
      return secret;
    },
  };
}

// We pass in a secret value. The returned object holds a reference to the closure.
const secret = SecretHolder("🔥 Comeback mode");

console.log(secret.getSecret()); // "🔥 Comeback mode"
// Even though 'secret' is not accessible directly, it's preserved inside the closure.
// This is a common technique to protect sensitive values or implement encapsulation.

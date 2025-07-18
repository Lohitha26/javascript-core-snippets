// 🔁 Example 1: Closure with counter
function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2

// 🔁 Example 2: Private variable using closure
function SecretHolder(secret) {
  return {
    getSecret: function () {
      return secret;
    }
  };
}
const secret = SecretHolder("🔥 Comeback mode");
console.log(secret.getSecret()); // "🔥 Comeback mode"

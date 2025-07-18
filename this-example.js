// 🔑 this keyword depends on:
// - strict vs non-strict mode
// - how the function is called
// - where the code is running (browser vs Node.js)

// In non-strict mode:
// - If `this` is undefined, substitution happens → replaced with global object
// - In browser: global object is `window`
// - In Node.js: global object is `global`

// In strict mode:
// - `this` remains undefined

function x() {
  console.log(this); // depends on environment & mode
}
console.log(x());

// 🔑 Example 1: this in regular function
function showName() {
  console.log(this.name); // `this` will depend on how the function is called
}

// 🔑 this inside object method
const obj = {
  a: 10,
  b: function () {
    console.log(this); // `this` refers to the object itself
  },
};
obj.b(); // 👉 { a: 10, b: [Function: b] }

// 🔑 Using call() to change context
const student1 = {
  name: "Lohitha",
  printName: function () {
    console.log(this.name); // this refers to student1
  },
};

const student2 = {
  name: "Deepika",
};

const student3 = {
  name: "Lohitha",
  printName: function (b) {
    console.log(this.name, b); // this can be overridden
  },
};

student1.printName.call(student2); // 👉 'Deepika'
student3.printName.call(student2, "Hello"); // 👉 'Deepika Hello'

// 🔑 Using apply() method (same as call, but arguments passed as array)
student3.printName.apply(student2, ["Hello"]); // 👉 'Deepika Hello'

// 🔑 Using bind() method (returns a new function with bound `this`)
const boundPrintName = student1.printName.bind(student2);
boundPrintName(); // 👉 'Deepika'

// 🔑 Assigning function to object to use `this`
const user = {
  name: "Lohitha",
  showName: showName, // reusing function
};
user.showName(); // 👉 'Lohitha'

// 🔑 Example 2: this in arrow function
// Arrow functions do NOT bind their own `this` — it uses the enclosing lexical scope
const arrowObj = {
  name: "Bangaram",
  say: () => {
    console.log(this.name); // undefined (arrow function doesn't bind its own this)
  },
};
arrowObj.say();

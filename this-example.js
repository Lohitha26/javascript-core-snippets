// 🔑 Example 1: this in regular function
function showName() {
  console.log(this.name);
}
const user = {
  name: 'Lohitha',
  showName: showName
};
user.showName(); // 👉 'Lohitha'

// 🔑 Example 2: this in arrow function
const arrowObj = {
  name: 'Bangaram',
  say: () => {
    console.log(this.name); // undefined, because arrow doesn't bind this
  }
};
arrowObj.say();

/* call polyfill */

const person1 = {
  name: "Rishabh"
}

function printAge(age) {
  console.log(`my ${age} and my name ${this.name}`)
}

Function.prototype.myCall = function(obj = {}, ...args) {

  if (typeof this !== "function") {
    throw new Error(this + "Function.prototype.myCall is not a function")
  }

  // -----for apply poly fill edge case
  // if(!Array.isArray(args)){
  // throw new Error("Args should be an array")
  // }

  obj.fn = this;
  obj.fn(...args);
}

printAge.myCall(person1, 25)

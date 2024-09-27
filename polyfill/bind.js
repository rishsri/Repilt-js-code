let obj = {
  name: 'Jack',
};

let myFunc = function() {
  console.log(`${this.name}`);
};

Function.prototype.myBind = function(obj) {
  obj.fnRef = this;
  return function() {
    obj.fnRef();
  }
};

let newFunc = myFunc.myBind(obj)
newFunc() // Jack

// is to explicitly set the value of this inside a function. By binding a specific context (object) to a function, you ensure that when the function is later invoked, it always uses that context as its this value. This is particularly useful in scenarios where the value of this is dynamically determined, and you want to ensure it remains consistent.


const person = {
  name: "Rishabh",
  hello: function(thing) {
    console.log(`${thing}`)
  }
}

const myFunc = function() {
  console.log(`${this.hello}`)
}

Function.prototype.myBind = function(obj) {
  obj.objRef = this;
  return function() {
    obj.objRef(...arguments)
  }
}

let callMyBind = person.hello.myBind(person)
callMyBind("me bind")

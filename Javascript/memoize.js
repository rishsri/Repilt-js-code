const memoize = (func) => {
  const cache = {};
  return (num) => {
    if (cache[num]) {
      return cache[num]
    } else {
      const result = func(num)
      cache[num] = result
      return result
    }
  }
}

const expensiveFunction = (num) => {
  return num * 2;
};

const memozieFunction = memoize(expensiveFunction)

console.log(memozieFunction(2));

// -------------------------------------------

function memoizedAdd() {
  let cache = {};

  return function(x, y) {
    if (cache[x + y]) {
      console.log('From Cache');
      return cache[x + y];
    } else {
      const result = x + y;
      cache[x + y] = result;
      console.log('Computed');
      return result;
    }
  };
}

const add = memoizedAdd();
console.log(add(3, 4)); // Output?
console.log(add(3, 4)); // Output?

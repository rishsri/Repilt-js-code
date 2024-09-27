const numbers = [1, 2, 3, 4, 5, 6];

function additionFunction(accumulator, current) {
  accumulator = accumulator + current;
  return accumulator;
}
const sum = numbers.reduce(additionFunction, 0);

console.log(sum);

Array.prototype.myReduce = function(callbackFn, initialValue) {
  let acc = initialValue !== undefined ? initialValue : this[0]; // Set accumulator to initialValue or first array element
  let startIndex = initialValue !== undefined ? 0 : 1; // Start from the first or second element based on initialValue

  for (let i = startIndex; i < this.length; i++) {
    acc = callbackFn(acc, this[i], i, this); // Correct accumulator logic
  }

  return acc; // Return the accumulated result
};

console.log(numbers.ourReduce(additionFunction));



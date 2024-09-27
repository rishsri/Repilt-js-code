const secondlargestArr = (arr) => {
  let max = -Infinity;
  let secMax = -Infinity;
  arr.forEach((x) => {
    if (x > max) {
      secMax = max
      max = x;
    }
    else if (x > secMax && x !== max) {
      secMax = x;
    }
  });

  return [max, secMax];

}

console.log(secondlargestArr([1, 2, 3, 4, 5, 6, 7, 8, 9,10, 10]))

// // Time Complexity: O(n)
// // Space Complexity: O(1)


const secondSmallestArr = (arr) => {
  let small = Infinity;
  let secSmall = Infinity;

  arr.forEach((x) => {
    if (x < small) {
      secSmall = small;
      small = x;
    } else if (x < secSmall && x !== small) {
      secSmall = x;
    }
  });

  return [small, secSmall];
};

console.log(secondSmallestArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10]));




// Time Complexity: O(n)
// Space Complexity: O(1)



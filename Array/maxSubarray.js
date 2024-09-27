// max sub Array 

// max sub Array 

const subArray = [2, 3, -2, 5, 4, 5, -5, -6, 9]

const maxSubArray = (arr) => {
  let sum = 0;
  let max = arr[0]
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    if (max < sum) {
      max = sum
    }
    if (sum < 0) {
      sum = 0
    }
  }
  return max
}

console.log(maxSubArray(subArray))

// -------------- brute force approch
// max sub Array 

const subArray = [2, 3, -2, 5, 4, 5, -5, -6, 9]

const maxSubArray = (arr) => {
  let maxSum = arr[0];
  let startIndex = 0;
  let endIndex = 0

  for (let i = 0; i < arr.length; i++) {

    let currentSum = 0

    for (let j = i; j < arr.length; j++) {
      currentSum = currentSum + arr[j]
      if (currentSum > maxSum) {
        maxSum = currentSum
        startIndex = i
        endIndex = j
      }
    }


  }

  return {
    maxSum: maxSum,
    subArray: arr.slice(startIndex, endIndex)

  }

}

console.log(maxSubArray(subArray))

}

console.log(maxSubArray(subArray))
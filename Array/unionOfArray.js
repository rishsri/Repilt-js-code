const array1 = [1, 2, 3, 4, 5]
const array2 = [3, 4, 5, 6, 7]

const unionOfArray = (arr1, arr2) => {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        result.push(arr1[i])
      }
    }
  }
  return result
}

console.log(unionOfArray(array1, array2))

// -------optimised Approch ----------

const array1 = [1, 2, 3, 4, 5]
const array2 = [3, 4, 5, 6, 7]

const unionOfArray = (arr1, arr2) => {

  const set = new Set();
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    set.add(arr1[i])
  }

  for (let j = 0; j < arr2.length; j++) {
    set.add(arr2[j])
  }

  set.forEach((x) => result.push(x))

  return result
}

console.log(unionOfArray(array1, array2))


// --------------------------------------

const array1 = [1, 2, 3, 4, 5]
const array2 = [3, 4, 5, 6, 7]

const unionOfArray = (arr1, arr2) => {
  let result = [];

  // Add elements from arr1
  for (let i = 0; i < arr1.length; i++) {
    if (!result.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }

  // Add elements from arr2 that are not already in the result
  for (let j = 0; j < arr2.length; j++) {
    if (!result.includes(arr2[j])) {
      result.push(arr2[j]);
    }
  }

  return result;
}

console.log(unionOfArray(array1, array2));

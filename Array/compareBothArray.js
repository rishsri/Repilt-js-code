const array = [1, 2, 3, 5, 8];
const array1 = [2, 3, 4, 6, 7];

const checkArray = (arr, arr1) => {
  let result = []

  if (arr.length !== arr1.length) {
    return false
  }

  const obj = {};
  const obj1 = {};

  arr.forEach((x) => obj[x] = (obj[x] || 0) + 1)
  arr1.forEach((x) => obj1[x] = (obj1[x] || 0) + 1)

  for (let i in obj) {
    result.push(parseInt(i))
  }


  for (let j in obj1) {
    if (!result.includes(parseInt(j))) {
      result.push(parseInt(j))
    }
  }

  return result.sort((x, y) => x - y)





}

console.log(checkArray(array, array1))

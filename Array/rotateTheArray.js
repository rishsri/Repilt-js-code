const arr = [1, 2, 3, 4, 5];
const d = 2;

const rotatedArray = arr.concat(arr.splice(0, d)); // remove the first d elements and concatenate them to the end of the array

console.log(rotatedArray); // [3, 4, 5, 1, 2]


// Left ROtate Array by One Place

const leftArray = (arr, val) => {
  let temp = arr[0]
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i]
  }
  arr[arr.length - 1] = temp

  return arr
}

console.log(leftArray([1, 2, 3, 4, 5], 1))

//----------------------------------------


const reverse = (arr, start, end) => {
  while (start < end) {

    [arr[start], arr[end]] = [arr[end], arr[start]]

    start++;
    end--;
  }
}

reverse(arr, 0, arr.length - 1)
//[5,4,3,2,1]


reverse(arr, 0, d - 1)
//[4,5,3,2,1]

reverse(arr, d, arr.length - 1);
//[4,5,1,2,3]


return arr;

}

console.log(rotateTheArray(array, 2))


//------------------------

const rotateTheArray = (arr, d) => {

  let temp = arr.slice(0, d)

  for (let i = d; i < arr.length; i++) {
    arr[i - d] = arr[i]
  }

  for (let i = arr.length - d; i < arr.length; i++) {

    arr[i] = temp[i - (arr.length - d)]

  }

  return arr

}

console.log(rotateTheArray([10, 20, 3, 4, 5], 2))




// ------------------

const rotateTheArray = (arr, d) => {

  let temp = arr.slice(0, d)

  for (let i = d; i < arr.length; i++) {
    arr[i - d] = arr[i]
  }

  let j = 0

  for (let i = arr.length - d; i < arr.length; i++) {
    arr[i] = temp[j]
    j++
  }

  return arr

}

console.log(rotateTheArray([10, 20, 3, 4, 5], 2))


//-----------------

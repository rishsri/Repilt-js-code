const array = [1,2,3,3,4,4,5];

const uniqueElementInArray = (arr) => {
  const obj = {};
  const result = [];
  for (let i = 0; i< arr.length; i++){
    obj[arr[i]] = obj[arr[i]] + 1 || 1
  }

  for (let i in obj){
    if(obj[i] === 1){
      result.push(i)
    }
  }

  return result
}

console.log(uniqueElementInArray(array))

// ------------------------------------------------------
// optimsed approch 

const uniqueElementInArray = (arr) => {
  let i = 0;
  for (let j = 0; j<arr.length; j++){

    if(arr[i] !== arr[j]){
       i++
      arr[i] = arr[j]

    }
  } return arr.slice(0, i+1)
}
console.log(uniqueElementInArray(array))



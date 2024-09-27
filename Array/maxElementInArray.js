const array = [1,2,3,5,6,8,9,10,15,12,20,11]

const maxEle = (arr) => {
  let max = 0 
   for (let i =0; i<arr.length;i++){
     if(arr[i] > max ){
       max = arr[i]
     }
   } return max
}

console.log(maxEle(array))

//second max element in an array 

const array = [1,2,3,5,6,8,9,10,20]

const maxEle = (arr) => {
  let maxArr = arr[0];
  let secMax = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (maxArr < arr[i]) {
      secMax = maxArr;
      maxArr = arr[i]
    } else if (arr[i] > secMax && maxArr !== secMax) {
      secMax = arr[i]
    }
  }

  return [maxArr, secMax]
  
}

console.log(maxEle(array))
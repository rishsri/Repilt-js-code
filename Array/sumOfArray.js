const array = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 6]

const sumOfArray = (arr) => {
  let left = 0;
  let right = arr.length - 1
  while (left < right) {
    let sum = arr[left] + arr[right] 
    if (sum === 0) {
      return [arr[left], arr[right]]
    } else if( sum > 0){
      right --
    } else if(sum < 0){
      left ++
    }
  } 
}

console.log(sumOfArray(array))



const sumOfArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length - 1; j >= 0; j--) {
       if(arr[i] + arr[j] === 0){
          return [arr[i],arr[j]]
       }
    }
  } return false
}
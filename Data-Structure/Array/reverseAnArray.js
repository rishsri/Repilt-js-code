let array = [1,2,3,4,5,6,9]

function reverse(arr){
  let b  = []
  for (let i=arr.length - 1; i >= 0; i-- ){
    b.push(arr[i])
  }
  return b
}

console.log(reverse(array))
// Left ROtate Array by One Place

const leftArray = (arr,val) => {
  let temp = arr[0]
  for (let i = 1; i< arr.length; i++){
    arr[i-1] = arr[i]
  }
  arr[arr.length - 1] = temp

  return arr
}

console.log(leftArray([1,2,3,4,5],1))


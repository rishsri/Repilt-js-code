function bubbleSort (sort) {
  for(let i = sort.length; i > 0; i--){
    for(let j = 0; j<=i-1; j++){
       if(sort[j] > sort[j + 1]){
         [sort[j],sort[j+1]] = [sort[j + 1],sort[j]]
       }
    }
  }
  return sort
}

let c = bubbleSort([20,3,4,5,2,10,8])

console.log(c)
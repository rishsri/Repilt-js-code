function factorial(n) {
  if(n == 0){
    return 1
  }
  return n * factorial(n-1)
}

console.log(factorial(4))


// factorial 

let num = 7

const factorail = (n) => {
  let initial  = 1
  for (let i = 2; i<=n.length;i++){
    initial = initial * i
  }return initial
}

console.log(factorail(num))
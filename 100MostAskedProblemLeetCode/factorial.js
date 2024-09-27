// factorial of a number

// 5*4*3*2*1 => 120

const num = 5;

const factNum = (n) => {
  let iniFact = 1;
  for (let i = 2; i <= n; i++){
    iniFact = iniFact * i
  }
   return iniFact
}

console.log(factNum(num))


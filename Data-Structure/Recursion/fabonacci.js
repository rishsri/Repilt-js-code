function fabonacciRecursion(n) {
  //0 and 1 is the base case 
  if (n < 2) {
    return n
  }

  return fabonacciRecursion(n - 1) + fabonacciRecursion(n - 2)
}

console.log(fabonacciRecursion(5))


function fabonacciRecursion(n) {
  let a = 0;
  let b = 1;
  let next
  for (let i = 1; i <= n; i++) {
    console.log(a)
    next = a + b;
    a = b
    b = next;

  }
}

fabonacciRecursion(5)

// febonaichi 


// ------------------memo
const n = 10;

const fibo = (n, memo = {}) => {
  if (memo[n]) {
    return memo[n]
  }
  if (n == 0) {
    return 0;
  } else if (n === 1) {
    return 1
  } else {
    memo[n] = fibo(n - 1) + fibo(n - 2)
    return memo[n]
  }
}


console.log(fibo(n))





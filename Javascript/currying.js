const curry = function(fn) {
  return function(...args) {
    if (args.length >= fn.length) {
      return fn(...args)
    } else {
      return fn.bind(null, ...args);
    }
  }
}

// ----------------------
export default function curry(func) {
  return function curried(...args) {

    if (args.length >= func.length) {

      return func.apply(this, args)
    }
    return curried.bind(this, ...args)
  }
}

// -------------------------------------------------------------

// This is a JavaScript coding problem from BFE.dev 

/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(fn) {
  return function carried(...args) {
    if (args.length >= fn.length) {
      return (fn.apply(this, args))
    }
    else {
      return function(...args2) {
        return carried.apply(this, args.concat(args2))
      }
    }
  }
}

function sum(a, b, c) {
  return a + b + c;
}

let a = curry(sum)

console.log(a(1, 2, 9))





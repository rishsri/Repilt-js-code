//push zero at last of an array

// --------------------------------------
// const zero = [0,2,3,2,0,0,2,2,0,0,4,2,4,0,2,9]

const swapZero = (arr) => {
  let a = [];
  let b = [];
  let c= [];
  for(let i = 0; i<arr.length; i++){
    if(arr[i] !== 0){
      a.push(arr[i])
    }
    if(arr[i] == 0){
    b.push(arr[i])
    }
    c = a.concat(b)
  }
  return  c
}

console.log(swapZero(zero))


// ----------------------------------------
// Optimised approch 

const moveZeroes = (arr) => {
  let c = 0;
  const n = arr. length;
  for (let i = 0; i< n; i++){
    if (arr[i] !== 0){
      [arr[i], arr[c]] = [arr[c], arr[i]]
      c++;
    }
  } 
  return arr;
  
}

console. log (moveZeroes ( [8, 5, 0, 10, 0, 2,0,1])

//

             const arr = [0,2,3,2,0,0,2,2,0,0,4,2,4,0,2,9]

const zero = 0;

const result = [arr.filter((el) => el !== zero), arr.filter((el) => el == zero)].flat()

console.log(result)

              
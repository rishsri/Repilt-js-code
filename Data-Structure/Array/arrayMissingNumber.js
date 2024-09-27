// function missingNo(arr){
//   let min = arr[0];
//   let max = arr[0];

//   for (let i = 1; i<arr.length; i++){
//     if(arr[i]<min){
//       min = arr[i]
//     }
//     if(arr[i]>max){
//       max= arr[i]
//     }
//   }
// for (let i = min; i<=max; i++){
//   console.log("arr",arr[i])
//   if(!arr.includes(arr[i])){
//     return i
//   }
// }

// }
// console.log(missingNo([6,1,2,8,3,4,7,10,5]))



// arr[i] = 1
// min = 6
//max = 6

// min = 1
//max = 8


//1+2+3+4 = 10
// 1+2+4 = 7 
// 10-7 = 3


//n*(a+l)/2
// 9 

function missingNo(arr) {
  let min = arr[0];
  let max = arr[0];
  let sumArr = 0
  for (let i = 0; i < arr.length; i++) {
    sumArr += arr[i];
    if (arr[i] < min) {
      min = arr[i]
    }
    if (arr[i] > max) {
      max = arr[i]
    }
  }

  return Math.floor((arr.length + 1) * (min + max) / 2) - sumArr;
}
console.log(missingNo([1, 2, 3, 4, 5, 6, 7, 9]))

/*
n => total no of elements
a => minimum number
l => maximum number
n*(a+l)/2 */

// 9 * (1 + 9) / 2 = 45 
// sumArr = withput missing elemnt


const n = nums.length;

const expectedSum = (n * (n + 1)) / 2;
const actualSum = nums.reduce((sum, num) => sum + num, 0);

return expectedSum - actualSum;


function missingNumber(a, N) {
  let xor1 = 0;
  let xor2 = 0;

  for (let i = 0; i < N ; i++) {
    xor2 = xor2 ^ a[i]; // XOR of array elements

  }

  for (let i = 1; i <= N ; i++) {

    xor1 = xor1 ^ i; // XOR up to [1...N-1]
  }


  return xor1 ^ xor2; // the missing number
}

function main() {
  const N = 5;
  const a = [1, 2, 4, 5];
  const ans = missingNumber(a, N);
  console.log("The missing number is:", ans);
}

main();

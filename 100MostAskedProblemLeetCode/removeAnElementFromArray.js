const array = [60, 30, 40, 50, 80]

const poisition = 2;


const element = (arr, poi) => {
  for (let i = poisition; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1]
  }
  arr.length = arr.length - 1
  return arr
}

console.log(element(array, poisition))


// ---predefined method----------------------------------
// const element = (arr, poi) => {
//   const sortArr = arr.sort()
//   console.log("2--",sortArr)
//  const removed =  sortArr.splice(2,1)
//   console.log("sort",sortArr)
// }

// console.log(element(array, poisition))

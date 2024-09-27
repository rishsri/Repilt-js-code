/* map */

/* arr.map((cr,index,arr) => {})*/

Array.prototype.myMap = function(cb) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i], i, this))
  }
  return result;
}

let nums = [1, 2, 3, 4, 5]

const multiTwo = nums.myMap((num, i, arr) => {
  return num * 3
})

console.log(multiTwo)
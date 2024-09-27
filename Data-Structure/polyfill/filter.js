/* map */

/* arr.map((cr,index,arr) => {})*/

Array.prototype.myFilter = function(cb) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      result.push(this[i])
    }
  }
  return result;
}

let nums = [1, 2, 3, 4, 5]

const multiTwo = nums.myFilter((num) => {
  return num > 3
})

console.log(multiTwo)

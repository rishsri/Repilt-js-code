
Array.prototype.newForEach = function(callback, context) {
  console.log(context)
  for (let index = 0; index < this.length; index++) {
    if (this.indexOf(this[index]) > -1) {
      callback.call(context, this[index], index, this)
    }
  }
}

const words = ["adam", "ate", "an", "apple"]
const upperCaseList = []


words.newForEach((word, index, context) => {
  upperCaseList.push(word.toUpperCase())
})
console.log(upperCaseList)

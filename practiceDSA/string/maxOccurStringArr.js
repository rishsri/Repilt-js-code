// Find the maximum Occurring string from an array.

const array = ["apple", "banana", "apple", "orange", "banana", "apple"];

const findMaxOccurringString = (arr) => {

  const obj = {}
  let max = 0;
  let value = ""
  for (let i = 0; i<arr.length; i++){
    obj[arr[i]] = (obj[arr[i]] || 0) + 1
  }

  for (let i in obj){
    if(max< obj[i]){
      max = obj[i] 
      value = i
    }

  }

  return value
}



console.log(findMaxOccurringString(array)); // Output: "apple"




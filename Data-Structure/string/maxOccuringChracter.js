const string = "hello World"

var max = {}
const  maxOccuring = (str) => {
    str.split("").forEach((element => {
     max[element] = max[element] ? max[element]  + 1 : 1; 
  }))
  let maximum = 1;
  let char = string[0]
  for (let k in max) {
    if(max[k] > maximum){
      maximum = max[k]
      char = k;
    }
     
  }
  return char
}
console.log(maxOccuring(string))
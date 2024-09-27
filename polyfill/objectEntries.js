const person = {
name: "Rishabh",
age: 25
}


/* console.log(Object.entries(person))
*/
const objEnt = (obj) => {
  const objKey = Object.keys(obj)
  console.log("---",objKey)
  
  const result = objKey.map((x) => {
 objValue = obj[x]
 console.log(objValue,x,obj[x])
return [x,objValue]
})
return result
} 
console.log(objEnt(person))
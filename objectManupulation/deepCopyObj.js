// write a method so that object comes in this format with using deep copy  object

let obj = {
  name: 'rishabh',
  print: () => {
    console.log("hello")
  },
  obj2: {
    name: 'akshat',
    print: () => {
      console.log("hello")
    },
  }
}


const newObj = (obj) => {
  const obj1 = {}
  for (let i in obj) {
    if (obj.hasOwnProperty(obj[i])) {
      obj1[i] = newObj(obj[i])
    }
  }

  return obj

}

console.log(newObj(obj))
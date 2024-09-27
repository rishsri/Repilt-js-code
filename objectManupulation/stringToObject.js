function stringToObject(input, finalValue) {
  // write your code below

  const char = input.split(".")

  let obj = {}
  let currentObj = obj;

  for (let i = 0; i < char.length - 1; i++) {
    currentObj[char[i]] = {}
    currentObj = currentObj[char[i]]

  }
  currentObj[char[char.length - 1]] = finalValue

  return obj

}


console.log(stringToObject("a.b.c", 3))


/* { a: { b: { c: 1 } } } */


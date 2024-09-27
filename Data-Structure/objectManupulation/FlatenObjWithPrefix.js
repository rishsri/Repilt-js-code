let input = {

  a: {
    b: {
      c: 1
    },
    d: 2

  }

}


const objModification = (obj, parentKey = "", result = {}) => {

  for (let key in obj) {
    const newkey = parentKey + key
    if (typeof obj[key] === "object" && obj[key] !== null) {
      objModification(obj[key], newkey, result)
    } else {
      result[newkey] = obj[key]
    }

  }
  return result
}


console.log(objModification(input))

/* {
  obc: 1,
  ad: 2
} */

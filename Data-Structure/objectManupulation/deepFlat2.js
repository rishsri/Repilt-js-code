let input = {
  a: 1,
  b: {
    c: 2,
    d: 3,
  },
  e: {
    f: {
      g: 4,
      h: null,
      i: undefined
    }
  }
}


const objModification = (obj) => {
  const result = {};

  for (let i in obj) {

    if (typeof obj[i] === "object" && obj[i] !== null) {
      const nestedResult = objModification(obj[i])

      for (let nestedkey in nestedResult) {
        result[nestedkey] = nestedResult[nestedkey]
      }

    } else {
      result[i] = obj[i]
    }
  }

  return result
}


console.log(objModification(input))


/* {
  a: 1,
  c:2,
  d:3,
  g:4,
  h: null,
  i: undeined
} */
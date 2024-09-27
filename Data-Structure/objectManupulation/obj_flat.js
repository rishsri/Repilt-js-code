let ob = {
  Company: "GeeksforGeeks",
  Address: "Noida",
  contact: +91 - 999999999,
  mentor: {
    HTML: "GFG",
    CSS: "GFG",
    JavaScript: "GFG"
  }
};

const flattningFunction = (obj) => {
  const result = {}
  for (const i in obj) {
    if (typeof obj[i] === "object") {
      let temp = flattningFunction(obj[i])
      for (const j in temp) {
        result[i + "." + j] = temp[j]
      }
    } else {
      result[i] = obj[i]
    }
  } return result
}

console.log(flattningFunction(ob))


// ----------------------------find path

const findPath = (object, path) => {
  const keys = path.split('.');
  let result = object;
  for (const key of keys) {
    if (result && Object.prototype.hasOwnProperty.call(result, key)) {
      result = result[key];
    } else {
      return undefined;
    }
  }
  return result;
};
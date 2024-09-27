const nested = {
  a: "12",
  b: 23,
  c: {
      p: 23,
      z: {
          l: [24, 34]
      }
  }
};

const modifyObj = (obj, prefix) => {
  let newObj = {};
  for (let i in obj) {
      let newPrefix = prefix ? prefix + "." + i : i;

      if (typeof obj[i] === "object") {
          if (Array.isArray(obj[i])) {
              // Iterate over array elements and add them to newObj
              for (let j = 0; j < obj[i].length; j++) {
                  newObj[newPrefix + "." + j] = obj[i][j];
              }
          } else {
              // Recursively process nested objects
              const newMethod = modifyObj(obj[i], newPrefix);
              newObj = { ...newObj, ...newMethod };
          }
      } else {
          // Add primitive values to newObj
          newObj[newPrefix] = obj[i];
      }
  }
  return newObj;
};

console.log(modifyObj(nested));
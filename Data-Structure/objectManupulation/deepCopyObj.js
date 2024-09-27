let obj = {
  name: 'rishabh',
  print: () => {
    console.log("hello");
  },
  obj2: {
    name: 'akshat',
    print: () => {
      console.log("hello");
    },
  }
}

const deepCopy = (obj) => {
  // Check if the value is an object or array
  if (obj && typeof obj === 'object') {
    const copy = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        // Recursively copy for nested objects and arrays
        copy[key] = deepCopy(obj[key]);
      }
    }
    return copy;
  }
  // Return the value itself if it is not an object (i.e., primitive value or function)
  return obj;
}

const newObj = deepCopy(obj);
console.log(newObj);
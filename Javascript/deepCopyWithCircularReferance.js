function deepCopyWithCircular(obj, visited = new Map()) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (visited.has(obj)) {
    // If the object has been visited before, return the existing copy
    return visited.get(obj);
  }

  const newObj = Array.isArray(obj) ? [] : {};

  visited.set(obj, newObj); // Store the new copy in the 'visited' map

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      // Recursively copy nested objects
      newObj[key] = deepCopyWithCircular(obj[key], visited);
    }
  }

  return newObj;
}

// Example usage:
const obj = {
  a: 1,
  b: {
    c: 2,
  },
};
obj.circularRef = obj; // Introducing a circular reference

const copiedObj = deepCopyWithCircular(obj);
console.log(copiedObj);

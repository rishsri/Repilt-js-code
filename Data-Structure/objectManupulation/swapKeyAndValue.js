
const swapKeysAndValues = (value) => {
  const obj = {};

  for (let key in value) {
    if (value.hasOwnProperty(key)) {
      if (obj[value[key]]) {
        obj[value[key]].push(key);
      } else {
        obj[value[key]] = [key];
      }
    }
  }
  return obj;
};

const exampleObject = { a: 'apple', b: 'banana', c: 'apple', d: 'date' };
const swappedObject = swapKeysAndValues(exampleObject);
console.log(swappedObject);
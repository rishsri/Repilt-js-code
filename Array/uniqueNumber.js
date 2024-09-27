const array = [1,2,3,4,4,4,5,6,7,8,9]

const uniqueArray = (array) => {
 let uniqueArrays = array.filter(function(item, pos,arr) {
    return arr.indexOf(item) == pos;
})
return uniqueArrays
}

console.log(uniqueArray(array))

// --------------------------------------------

const uniqueArray = (array) => {
  const seen = new Set();
  return array.filter(item => {
    if (!seen.has(item)) {
      seen.add(item);
      return true;
    }
    return false;
  });
}

console.log(uniqueArray(array));

// --------------------------------------------
const uniqueArray = (array) => {
  const seen = {};
  return array.filter(item => {
    if (!seen.hasOwnProperty(item)) {
      seen[item] = true;
      return true;
    }
    return false;
  });
}

console.log(uniqueArray(array));

function deepCompare(obj1, obj2) {
  // compare keys length
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  // compare values
  for (let key in obj1) {
    const val1  = obj1[key];
    const val2 = obj2[key];

    // recurse if value is an object
    if (typeof val1 === 'object') {
      if (!deepCompare(val1, val2)) {
        return false;
      }
    } else if (val1 !== val2) {
      return false;
    }
  }

  return true;
}

deepCompare(obj1, obj2); // true

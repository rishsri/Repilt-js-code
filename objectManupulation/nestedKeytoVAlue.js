const keys = ["name", "place.country.state.city", "work.place"]
const value = ["Rishabh", "Delhi", "Noida"]


const objVal = (keys, value) => {
  const obj = {};
  let currentObj = obj;
  for (let i = 0; i < keys.length; i++) {

    if (!keys[i].includes(".")) {
      currentObj[keys[i]] = value[i]
    } else {
      let strSplit = keys[i].split(".");
      for (let j = 0; j < strSplit.length; j++) {

        if (!currentObj[strSplit[j]]) {
          currentObj[strSplit[j]] = {}
        }
        if (j === strSplit.length - 1) {
          currentObj[strSplit[j]] = value[i]
        }
        currentObj = currentObj[strSplit[j]]
      }
    }
    currentObj = obj
  }

  return obj
}

console.log(objVal(keys, value))



/* {
place: {
countyry: {
state: {
city: delhi
}
}
}
} */

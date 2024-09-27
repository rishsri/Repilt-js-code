const dup = "Heellooo Worldddd"

const duplicate = (str) => {
  let result = [];
  const arr = str.split("")
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      if ((arr[i] !== ' ' && " ")) {
        result.push(arr[i])
      }

    }
  } return result
}

console.log(duplicate(dup))
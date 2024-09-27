const arr = [1, 2, 2, 3, 3, 4, 4]

const sorted = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] < arr[i]) {
      return "not sorted"
    }
  }
  return "Sorted"
}

console.log(sorted(arr))
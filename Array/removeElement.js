function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1; // not found
}

function removeElement(arr, target) {
  const index = binarySearch(arr, target);
  if (index !== -1) {
    arr.splice(index, 1);
  }
}

const arr = [1, 2, 3, 4, 5];
removeElement(arr, 3);
console.log(arr); // Output: [1, 2, 4, 5]

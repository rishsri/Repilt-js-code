const binarySearch = (arr, n, l, r) => {
     if(l>r) {
        return -1;
     }
     let mid = Math.floor((l+r)/2);
     if(arr[mid] === n) return mid;
     else if(n < arr[mid]) {
        return binarySearch(arr, n, l, mid - 1);
     }
     else {
       return binarySearch(arr, n, mid + 1, r);
     }
}

const arr = [1,2,3,4,5,7,9];
console.log(binarySearch(arr,7, 0, arr.length-1))

// -------------------------------------------------------

export default function binarySearch(arr, target) {
let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (target === arr[mid]) {
      return mid; // Element found, return its index
    } else if (target > arr[mid]) {
      low = mid + 1; // Search the right half
    } else {
      high = mid - 1; // Search the left half
    }
  }

  return -1; 
}
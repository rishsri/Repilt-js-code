function maxTrappedWater(arr) {
  //Tow pointer, left and right
  let l = 0;
  let r = arr.length - 1;
  let max = 0;
  while (l < r) {
    //Find the minimum height between two elements
    const min = Math.min(arr[l], arr[r]);
    //Use the min height and multiply with the distance (r-l)
    const area = min * (r - l);
    max = Math.max(area, max);
    //move the pointer for whichever height is smaller
    arr[l] < arr[r] ? l++ : r--;
  }
  return max;
}
console.log(findMaxTappedWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
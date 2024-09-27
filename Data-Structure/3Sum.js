

function threeSum(arr) {
  const result = [];
  arr = arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 2; i++) {
    if (i == 0 || (i > 0 && arr[i] !== arr[i - 1])) {
      const req = 0 - arr[i];
      let left = i + 1;
      let right = arr.length - 1;
      while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum + req === 0) {
          result.push([i, left, right]);
        } else if (sum > req) {
          right--;
        } else {
          left++;
        }
      }
    }
  }
  return result;
}
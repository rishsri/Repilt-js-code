//Max Profit
// ip [7,1,5,3,6,4]
// op: 5 because 6-1 = 5

function maxProfit(arr) {
  let max = 0;
  let i = 0;
  let j = i + 1;
  while (j < arr.length) {
    if (arr[j] > arr[i]) {
      const p = arr[i] - arr[i];
      max = Math.max(p, max);
    } else {
      i = j;
    }
    j++;
  }
  return max;
}
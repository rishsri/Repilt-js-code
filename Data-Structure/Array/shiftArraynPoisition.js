const array = [1, 2, 3, 4, 5, 6, 7]

const rotate = (arr, k) => {
  let n = arr.length;
  if (n === 0) {
    return;
  }

  // what if k value come 10 or 12 thats why we have taken modulo
  k = k % n;

  if (k > n) {
    return;
  }
  let temp = [];
  //store the value in temp array which we dont want to rotate 
  for (let i = n - k; i < n; i++) {
    temp[i - n + k] = arr[i]
  }

  // shift the poisition of the array which we want to rotate 
  for (let i = n - k - 1; i >= 0; i--) {
    arr[i + k] = arr[i];
  }

  // and now we will add the temp array into the arr in starting poisition
  for (let i = 0; i < k; i++) {
    console.log(arr[i] = temp[i], "2")
    arr[i] = temp[i]
  }

  return arr
}

console.log(rotate(array, 3))

// ------------another approach----------------------

function rotate(nums, k) {
  k = k % nums.length;
  let l = 0;
  let r = nums.length - 1;
  // reverse full given array
  // from [1,2,3,4,5,6,7] to [7,6,5,4,3,2,1]
  nums = reverseArr(nums, l, r);

  // reverse part from 0 to k - 1;
  // from [7,6,5,4,3,2,1] to [5,6,7,4,3,2,1]
  l = 0;
  r = k - 1;
  nums = reverseArr(nums, l, r);

  // reverse part from k to the end;
  // from [5,6,7,4,3,2,1] to [5,6,7,1,2,3,4]
  l = k;
  r = nums.length - 1;
  nums = reverseArr(nums, l, r);
};

function reverseArr(nums, l, r) {
  while (l < r) {
    let temp = nums[l];
    nums[l] = nums[r];
    nums[r] = temp;
    l++;
    r--;
  }

  return nums;
}
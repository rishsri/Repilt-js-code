/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let len = nums.length;
    let results = new Array().fill(len);
    for (let i = 0; i < len; i++) {
        let product = 1;
        for (let j = 0; j < len; j++) {
            if (i == j) continue;
            product *= nums[j];
        }
        results[i] = product;
    }

    return results;
};

// ----------------------------------

/**
 * @param {number[]} nums
 * @return {number[]}
 * [1,2,3]
 product = 1 , temp = 1
 temp = 1 * 1 = 1
 */
var productExceptSelf = function(arr) {
    let prod = [];
    let temp = 1;

    for (let i = 0; i < arr.length; i++) {
        prod[i] = temp;
        temp = temp * arr[i];
    }

    temp = 1;

    for (let i = arr.length - 1; i >= 0; i--) {
        prod[i] = temp * prod[i];
        temp = temp * arr[i];
    }

    return prod
}


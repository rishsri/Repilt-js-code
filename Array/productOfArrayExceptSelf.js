/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let len = nums.length;
    let results = new Array().fill(len);
    for(let i = 0; i < len; i++) {
        let product = 1;
        for(let j = 0; j < len; j++) {
            if(i == j) continue;
            product *= nums[j];
        }
        results[i] = product;
    }

    return results;
};

// ----------------------------------

var productExceptSelf = function(nums) {
    const output = [];
    let numberOfZero = 0;
    let temp = 1;

    for (let i = 0; i< nums.length;i++) {
        if (nums[i] === 0) numberOfZero++;
        temp = temp*(nums[i] || 1);
    }

    for (let i = 0; i< nums.length;i++) {
        if (numberOfZero > 1){
            output.push(0);
        } else if (numberOfZero === 1) {
            output.push(nums[i] ? 0 : temp);
        } else {
            output.push(temp/nums[i]);
        }
    }

    return output;
};
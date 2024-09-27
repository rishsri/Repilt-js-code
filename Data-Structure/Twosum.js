const twoSum = (array, goal) => {
  let hash = {};

  for (let i = 0; i < array.length; i++) {
    let complement = goal - array[i];

    if (complement in hash) {
      return [hash[complement], i];
    }

    hash[array[i]] = i;
  }

  return [];
} 



const twoSum = (array, goal) => {
    let indexes = [];

    for(let i = 0; i < array.length; i++){
       for(let j = i + 1; j < array.length; j++){
          if (array[i] + array[j] === goal) {
        indexes.push(i);
        indexes.push(j);
          }
       }
    }
    return indexes;
} 

var twoSum = function(nums, target) {
    let map = new Map()
    for (let i = 0; i<nums.length; i++){
        const x = target - nums[i];
        if(map.has(x)){
            return [map.get(x),i]
        }
        map.set(nums[i],i)
    }
    return []
};
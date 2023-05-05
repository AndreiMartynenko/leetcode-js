/*
1. Two Sum
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Array.prototype.map()
The map() method creates a new array populated with the results 
of calling a provided function on every element in the calling array.

Map.prototype.has()
The has() method returns a boolean indicating whether an element 
with the specified key exists or not.

*/
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
}
let arg1 = [2,7,11,15]
let arg2 = 9

console.log(twoSum(arg1, arg2))
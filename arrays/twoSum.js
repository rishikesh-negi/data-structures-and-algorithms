// TWO SUM:
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Initial (suboptimal) solution, before learning about Hashmaps :
function twoSum(nums, target) {
  for (let i = nums.length - 1; i >= 1; i--) {
    for (let j = 0; j < i; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }

    nums.pop();
  }
}

const nums = [2, 7, 11, 15];
const target = 9;

twoSum(nums, target);

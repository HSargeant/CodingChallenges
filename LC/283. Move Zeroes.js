/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
          nums[count] = nums[i]
          count++
      }
  }
  for (let i = count; i < nums.length; i++) {
      nums[i] = 0
  }

};
// 283 move Zeroes
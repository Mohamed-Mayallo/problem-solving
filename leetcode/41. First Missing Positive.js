/**
 * 41. First Missing Positive
 * Hard
 * https://leetcode.com/problems/first-missing-positive/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(1)
 */

var firstMissingPositive = function (nums) {
  let i = 0;
  while (i < nums.length) {
    let j = nums[i] - 1;
    if (nums[i] !== nums[j] && nums[i] > 0 && nums[i] <= nums.length)
      [nums[i], nums[j]] = [nums[j], nums[i]];
    else i++;
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) return i + 1;
  }
  return nums.length + 1;
};

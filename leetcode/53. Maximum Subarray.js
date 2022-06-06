/**
 * 53. Maximum Subarray
 * Easy
 * https://leetcode.com/problems/maximum-subarray/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(1)
 */

// Kadane's Algorithm
var maxSubArray = function (nums) {
  let currentSum = nums[0],
    maxSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
};

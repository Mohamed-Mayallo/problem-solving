/**
 * Find the Smallest Missing Positive Number
 * Medium
 * https://www.educative.io/courses/grokking-the-coding-interview/3jEXWgB5ZmM
 */

/**
  Problem Statement

  Given an unsorted array containing numbers, find the smallest missing positive number in it.
  Note: Positive numbers start from ‘1’.

  Example 1:
  Input: [-3, 1, 5, 4, 2]
  Output: 3
  Explanation: The smallest missing positive number is '3'

  Example 2:
  Input: [3, -2, 0, 1, 2]
  Output: 4

  Example 3:
  Input: [3, 2, 5, 1]
  Output: 4
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(1)
 */

const find_first_smallest_missing_positive = function (nums) {
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

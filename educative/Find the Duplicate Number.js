/**
 * Find the Duplicate Number
 * Easy
 * https://www.educative.io/courses/grokking-the-coding-interview/3wEkKy6Pr9A
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(1)
 */

/**
  Problem Statement

  We are given an unsorted array containing ‘n+1’ numbers taken from the range 1 to ‘n’. The array has only one duplicate but it can be repeated multiple times. Find that duplicate number without using any extra space. You are, however, allowed to modify the input array.

  Example 1:
  Input: [1, 4, 4, 3, 2]
  Output: 4

  Example 2:
  Input: [2, 1, 3, 3, 5, 4]
  Output: 3

  Example 3:
  Input: [2, 4, 1, 4, 4]
  Output: 4
 */

const find_duplicate = function (nums) {
    let i = 0;
    while (i < nums.length) {
        let n = nums[i] - 1;
        if (nums[i] !== nums[n]) [nums[i], nums[n]] = [nums[n], nums[i]];
        else i++;
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) return nums[i];
    }
    return -1;
};

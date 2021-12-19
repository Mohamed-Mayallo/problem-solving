/**
 * Find the Missing Number
 * Easy
 * https://www.educative.io/courses/grokking-the-coding-interview/JPnp17NYXE9
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(1)
 */

/**
  Problem Statement

  We are given an array containing ‘n’ distinct numbers taken from the range 0 to ‘n’. Since the array has only ‘n’ numbers out of the total ‘n+1’ numbers, find the missing number.

  Example 1:
  Input: [4, 0, 3, 1]
  Output: 2

  Example 2:
  Input: [8, 3, 5, 2, 4, 6, 0, 1]
  Output: 7
 */

const find_missing_number = function (nums) {
    let i = 0;
    while (i < nums.length) {
        let n = nums[i];
        if (n < nums.length && n !== i) {
            [nums[i], nums[n]] = [nums[n], nums[i]];
        } else i++;
    }
    for (let i = 0; i <= nums.length; i++) {
        if (i !== nums[i]) return i;
    }
    return -1;
};

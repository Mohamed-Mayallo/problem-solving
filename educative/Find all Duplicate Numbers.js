/**
 * Find all Duplicate Numbers
 * Easy
 * https://www.educative.io/courses/grokking-the-coding-interview/RLw1Pjk1GQ0
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(1)
 */

/**
  Problem Statement

  We are given an unsorted array containing ‘n’ numbers taken from the range 1 to ‘n’. The array has some numbers appearing twice, find all these duplicate numbers without using any extra space.

  Example 1:
  Input: [3, 4, 4, 5, 5]
  Output: [4, 5]

  Example 2:
  Input: [5, 4, 7, 2, 3, 5, 3]
  Output: [3, 5]
 */

const find_all_duplicates = function (nums) {
    let duplicateNumbers = [];
    let i = 0;
    while (i < nums.length) {
        let n = nums[i] - 1;
        if (nums[i] !== nums[n]) [nums[i], nums[n]] = [nums[n], nums[i]];
        else i++;
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) duplicateNumbers.push(nums[i]);
    }
    return duplicateNumbers;
};

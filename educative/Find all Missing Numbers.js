/**
 * Find all Missing Numbers
 * Easy
 * https://www.educative.io/courses/grokking-the-coding-interview/Y52qNM0ljWK
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(1)
 */

/**
  Problem Statement

  We are given an unsorted array containing numbers taken from the range 1 to ‘n’. The array can have duplicates, which means some numbers will be missing. Find all those missing numbers.

  Example 1:
  Input: [2, 3, 1, 8, 2, 3, 5, 1]
  Output: 4, 6, 7
  Explanation: The array should have all numbers from 1 to 8, due to duplicates 4, 6, and 7 are missing.

  Example 2:
  Input: [2, 4, 1, 2]
  Output: 3

  Example 3:
  Input: [2, 3, 2, 1]
  Output: 4
 */

const find_missing_numbers = function (nums) {
    let missingNumbers = [];
    let i = 0;
    while (i < nums.length) {
        let n = nums[i] - 1;
        if (nums[i] !== nums[n]) {
            [nums[i], nums[n]] = [nums[n], nums[i]];
        } else i++;
    }
    for (let j = 0; j < nums.length; j++) {
        if (j + 1 !== nums[j]) missingNumbers.push(j + 1);
    }
    return missingNumbers;
};

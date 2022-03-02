/**
 * Subsets With Duplicates
 * Easy
 * https://www.educative.io/courses/grokking-the-coding-interview/7npk3V3JQNr
 */

/**
  Problem Statement
  Given a set of numbers that might contain duplicates, find all of its distinct subsets.

  Example 1:
  Input: [1, 3, 3]
  Output: [], [1], [3], [1,3], [3,3], [1,3,3]

  Example 2:
  Input: [1, 5, 3, 3]
  Output: [], [1], [5], [3], [1,5], [1,3], [5,3], [1,5,3], [3,3], [1,3,3], [3,3,5], [1,5,3,3] 
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N * 2​^N)
 * Space complexity : O(N * 2​^N)
 */

const find_subsets = function (nums) {
    nums.sort((a, b) => a - b);
    const subsets = [[]];
    let prevSubsets = [];
    for (let j = 0; j < nums.length; j++) {
        let n = nums[j];
        let newSubsets = [];
        let isDub = n === nums[j - 1];
        let len = isDub ? prevSubsets.length : subsets.length;
        for (let i = 0; i < len; i++) {
            let subs = isDub ? prevSubsets : subsets;
            newSubsets.push([...subs[i], n]);
        }
        prevSubsets = newSubsets;
        subsets.push(...newSubsets);
        newSubsets = [];
    }
    return subsets;
};

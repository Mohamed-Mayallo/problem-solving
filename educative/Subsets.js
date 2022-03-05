/**
 * Subsets
 * Easy
 * https://www.educative.io/courses/grokking-the-coding-interview/gx2OqlvEnWG
 */

/**
  Problem Statement
  Given a set with distinct elements, find all of its distinct subsets.

  Example 1:
  Input: [1, 3]
  Output: [], [1], [3], [1,3]

  Example 2:
  Input: [1, 5, 3]
  Output: [], [1], [5], [3], [1,5], [1,3], [5,3], [1,5,3]
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N * 2​^N)
 * Space complexity : O(N * 2​^N)
 */

const find_subsets = function (nums) {
    const subsets = [[]];
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        const len = subsets.length;
        for (let j = 0; j < len; j++) {
            const st = subsets[j];
            const sub = [...st, n];
            subsets.push(sub);
        }
    }
    return subsets;
};

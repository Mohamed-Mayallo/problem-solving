/**
 * Quadruple Sum to Target
 * Medium
 * https://www.educative.io/courses/grokking-the-coding-interview/B6XOq8KlkWo
 */

/**
  Problem Statement

  Given an array of unsorted numbers and a target number, find all unique quadruplets in it, whose sum is equal to the target number.

  Example 1:
  Input: [4, 1, 2, -1, 1, -3], target=1
  Output: [-3, -1, 1, 4], [-3, 1, 1, 2]
  Explanation: Both the quadruplets add up to the target.

  Example 2:
  Input: [2, 0, -1, 1, -2, 2], target=2
  Output: [-2, 0, 2, 2], [-1, 0, 1, 2]
  Explanation: Both the quadruplets add up to the target.
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N3)
 * Space complexity : O(N)
 */

const search_quadruplets = function (arr, target) {
  arr.sort((a, b) => a - b);
  let quadruplets = [];
  let i = 0;
  while (i < arr.length - 3) {
    let t1 = target - arr[i];
    let j = i + 1;
    while (j < arr.length - 2) {
      let t2 = t1 - arr[j];
      let k1 = j + 1,
        k2 = arr.length - 1;
      while (k1 < k2) {
        let sum = arr[k1] + arr[k2];
        if (t2 === sum) {
          quadruplets.push([arr[i], arr[j], arr[k1], arr[k2]]);
          k1++;
          k2--;
          while (k1 < k2 && arr[k1] === arr[k1 - 1]) k1++;
          while (k1 < k2 && arr[k2] === arr[k2 + 1]) k2--;
        } else if (t2 < sum) {
          k2--;
        } else if (t2 > sum) {
          k1++;
        }
      }
      j++;
      while (j < arr.length - 2 && arr[j] === arr[j - 1]) j++;
    }
    i++;
    while (i < arr.length - 3 && arr[i] === arr[i - 1]) i++;
  }
  return quadruplets;
};

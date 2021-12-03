/**
 * Triplet Sum to Zero
 * Medium
 * https://www.educative.io/courses/grokking-the-coding-interview/gxk639mrr5r
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N^2)
 * Space complexity : O(N)
 */

/**
  Problem Statement

  Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

  Example 1:
  Input: [-3, 0, 1, 2, -1, 1, -2]
  Output: [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
  Explanation: There are four unique triplets whose sum is equal to zero.

  Example 2:
  Input: [-5, 2, -1, -2, 3]
  Output: [[-5, 2, 3], [-2, -1, 3]]
  Explanation: There are two unique triplets whose sum is equal to zero.
 */

const search_triplets = function (arr) {
    if (arr.length < 3) return [];

    let triplets = [];
    let sortedArr = arr.sort((a, b) => a - b);

    for (let i = 0; i < sortedArr.length; i++) {
        let targetSum = -sortedArr[i];
        let leftPointer = i + 1;
        let rightPointer = sortedArr.length - 1;

        if (sortedArr[i] === sortedArr[i - 1]) continue;

        while (leftPointer < rightPointer) {
            let left = sortedArr[leftPointer];
            let right = sortedArr[rightPointer];

            if (left + right === targetSum) {
                triplets.push([left, right, -targetSum]);
                while (left === sortedArr[leftPointer + 1]) leftPointer++;
                while (right === sortedArr[rightPointer - 1]) rightPointer--;
                leftPointer++;
                rightPointer--;
            } else if (targetSum < left + right) {
                rightPointer--;
            } else if (targetSum > left + right) {
                leftPointer++;
            }
        }
    }

    return triplets;
};

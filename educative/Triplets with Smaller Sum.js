/**
 * Triplets with Smaller Sum
 * Medium
 * https://www.educative.io/courses/grokking-the-coding-interview/mElknO5OKBO
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N^2)
 * Space complexity : O(N)
 */

/**
  Problem Statement#
  Given an array arr of unsorted numbers and a target sum, count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices. Write a function to return the count of such triplets.

  Example 1:
  Input: [-1, 0, 2, 3], target=3 
  Output: 2
  Explanation: There are two triplets whose sum is less than the target: [-1, 0, 3], [-1, 0, 2]

  Example 2:
  Input: [-1, 4, 2, 1, 3], target=5 
  Output: 4
  Explanation: There are four triplets whose sum is less than the target: 
    [-1, 1, 4], [-1, 1, 3], [-1, 1, 2], [-1, 2, 3]
 */

const triplet_with_smaller_sum = function (arr, target) {
    let count = 0;
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        let leftPointer = i + 1,
            rightPointer = arr.length - 1;
        while (leftPointer < rightPointer) {
            let left = arr[leftPointer],
                right = arr[rightPointer],
                fixed = arr[i],
                sum = left + right + fixed;
            if (sum < target) {
                count += rightPointer - leftPointer;
                leftPointer++;
            } else {
                rightPointer--;
            }
        }
    }
    return count;
};

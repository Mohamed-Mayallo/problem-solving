/**
 * Remove Duplicates
 * Easy
 * https://www.educative.io/courses/grokking-the-coding-interview/mEEA22L5mNA
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(1)
 */

/**
  Problem Statement#
  Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the length of the subarray that has no duplicate in it.

  Example 1:
  Input: [2, 3, 3, 3, 6, 9, 9]
  Output: 4
  Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].

  Example 2:
  Input: [2, 2, 2, 11]
  Output: 2
  Explanation: The first two elements after removing the duplicates will be [2, 11].
 */

const remove_duplicates = function (arr) {
    let firstPointer = 0,
        secondPointer = 0;

    while (firstPointer < arr.length) {
        if (arr[firstPointer] !== arr[firstPointer - 1]) {
            arr[secondPointer] = arr[firstPointer];
            secondPointer++;
        }
        firstPointer++;
    }

    return secondPointer;
};

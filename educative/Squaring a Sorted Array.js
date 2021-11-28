/**
 * Squaring a Sorted Array
 * Easy
 * https://www.educative.io/courses/grokking-the-coding-interview/R1ppNG3nV9R
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(N)
 */

/**
  Problem Statement#
  Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.

  Example 1:

  Input: [-2, -1, 0, 2, 3]
  Output: [0, 1, 4, 4, 9]
  Example 2:

  Input: [-3, -1, 0, 1, 2]
  Output: [0, 1, 1, 4, 9]
 */

const make_squares = function (arr) {
    let squares = [],
        leftPointer = 0,
        rightPointer = arr.length - 1,
        indexOfGreater = arr.length - 1;

    while (leftPointer <= rightPointer) {
        let left = arr[leftPointer] * arr[leftPointer],
            right = arr[rightPointer] * arr[rightPointer];

        if (left < right) {
            squares[indexOfGreater] = right;
            rightPointer--;
        } else if (left > right) {
            squares[indexOfGreater] = left;
            leftPointer++;
        } else {
            squares[indexOfGreater] = left;
            leftPointer++;
        }

        indexOfGreater--;
    }

    return squares;
};

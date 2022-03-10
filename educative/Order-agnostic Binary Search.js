/**
 * Order-agnostic Binary Search
 * Easy
 * https://www.educative.io/courses/grokking-the-coding-interview/R8LzZQlj8lO
 */

/**
  Problem Statement

  Given a sorted array of numbers, find if a given number ‘key’ is present in the array. Though we know that the array is sorted, we don’t know if it’s sorted in ascending or descending order. You should assume that the array can have duplicates.

    Write a function to return the index of the ‘key’ if it is present in the array, otherwise return -1.

    Example 1:
    Input: [4, 6, 10], key = 10
    Output: 2

    Example 2:
    Input: [1, 2, 3, 4, 5, 6, 7], key = 5
    Output: 4

    Example 3:
    Input: [10, 6, 4], key = 10
    Output: 0

    Example 4:
    Input: [10, 6, 4], key = 4
    Output: 2
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(logN)
 * Space complexity : O(1)

 */

const binary_search = function (arr, key) {
    let start = 0,
        end = arr.length - 1,
        mid = Math.floor((start + end) / 2),
        isAsc = arr[start] < arr[end];
    while (end >= start) {
        if (arr[mid] === key) return mid;
        else if (arr[mid] > key) {
            if (isAsc) end = mid - 1;
            else start = mid + 1;
            mid = Math.floor((start + end) / 2);
        } else if (arr[mid] < key) {
            if (isAsc) start = mid + 1;
            else end = mid - 1;
            mid = Math.floor((start + end) / 2);
        }
    }
    return -1;
};

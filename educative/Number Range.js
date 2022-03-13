/**
 * Number Range
 * Medium
 * https://www.educative.io/courses/grokking-the-coding-interview/R1B78K9oBEz
 */

/**
    Problem Statement

    Given an array of numbers sorted in ascending order, find the range of a given number ‘key’. The range of the ‘key’ will be the first and last position of the ‘key’ in the array.
    Write a function to return the range of the ‘key’. If the ‘key’ is not present return [-1, -1].

    Example 1:
    Input: [4, 6, 6, 6, 9], key = 6
    Output: [1, 3]

    Example 2:
    Input: [1, 3, 8, 10, 15], key = 10
    Output: [3, 3]

    Example 3:
    Input: [1, 3, 8, 10, 15], key = 12
    Output: [-1, -1]
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(Log(N))
 * Space complexity : O(1)
 */

const find_range = function (arr, key) {
    let start = 0,
        end = arr.length - 1,
        isFound = false;
    while (end >= start) {
        let mid = Math.floor((start + end) / 2);
        let i = arr[mid];
        if (key === i && !isFound) {
            isFound = true;
            start = mid;
            end = mid;
        } else if (key > i) {
            start = mid + 1;
        } else if (key < i) {
            end = mid - 1;
        }
        if (isFound) {
            if (arr[start] === key) start--;
            if (arr[end] === key) end++;
            if (arr[start] !== key && arr[end] !== key)
                return [start + 1, end - 1];
        }
    }
    return [-1, -1];
};

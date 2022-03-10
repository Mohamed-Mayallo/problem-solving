/**
 *  Ceiling of a Number
 *  Medium
 *  https://www.educative.io/courses/grokking-the-coding-interview/qA5wW7R8ox7
 */

/**
    Problem Statement

    Given an array of numbers sorted in an ascending order, find the ceiling of a given number ‘key’. The ceiling of the ‘key’ will be the smallest element in the given array greater than or equal to the ‘key’.
    Write a function to return the index of the ceiling of the ‘key’. If there isn’t any ceiling return -1.

    Example 1:
    Input: [4, 6, 10], key = 6
    Output: 1
    Explanation: The smallest number greater than or equal to '6' is '6' having index '1'.

    Example 2:
    Input: [1, 3, 8, 10, 15], key = 12Output: 4Explanation: The smallest number greater than or equal to '12' is '15' having index '4'.

    Example 3:
    Input: [4, 6, 10], key = 17Output: -1Explanation: There is no number greater than or equal to '17' in the given array.

    Example 4:
    Input: [4, 6, 10], key = -1Output: 0Explanation: The smallest number greater than or equal to '-1' is '4' having index '0'.
 */

/**
 *  First solution
 *  -----------------
 *  Time complexity  : O(log(N))
 *  Space complexity : O(1)
 */

const search_ceiling_of_a_number = function (arr, key) {
    let start = 0,
        end = arr.length - 1;
    while (end >= start) {
        let mid = Math.floor((start + end) / 2);
        let n = arr[mid];
        if (n === key) return mid;
        else if (end === start && arr[end] < key) return -1;
        else if (end === start && arr[end] > key) return end;
        else if (arr[mid] < key) start = mid + 1;
        else if (arr[mid] > key) end = mid - 1;
    }
    return -1;
};

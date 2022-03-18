/**
 * Single Number
 * Easy
 * https://www.educative.io/courses/grokking-the-coding-interview/gk20xz4VwpG
 */

/**
    Problem Statement

    In a non-empty array of integers, every number appears twice except for one, find that single number.

    Example 1:
    Input: 1, 4, 2, 1, 3, 2, 3
    Output: 4

    Example 2:
    Input: 7, 9, 7
    Output: 9
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(1)
 */

function find_single_number(arr) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        num ^= arr[i];
    }
    return num;
}

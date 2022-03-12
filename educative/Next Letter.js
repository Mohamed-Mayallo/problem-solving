/**
 * Next Letter
 * Medium
 * https://www.educative.io/courses/grokking-the-coding-interview/g2w6QPBA2Nk
 */

/**
    Problem Statement

    Given an array of lowercase letters sorted in ascending order, find the smallest letter in the given array greater than a given ‘key’.
    Assume the given array is a circular list, which means that the last letter is assumed to be connected with the first letter. This also means that the smallest letter in the given array is greater than the last letter of the array and is also the first letter of the array.
    Write a function to return the next letter of the given ‘key’.

    Example 1:
    Input: ['a', 'c', 'f', 'h'], key = 'f'
    Output: 'h'
    Explanation: The smallest letter greater than 'f' is 'h' in the given array.

    Example 2:
    Input: ['a', 'c', 'f', 'h'], key = 'b'
    Output: 'c'
    Explanation: The smallest letter greater than 'b' is 'c'.

    Example 3:
    Input: ['a', 'c', 'f', 'h'], key = 'm'
    Output: 'a'
    Explanation: As the array is assumed to be circular, the smallest letter greater than 'm' is 'a'.

    Example 4:
    Input: ['a', 'c', 'f', 'h'], key = 'h'
    Output: 'a'
    Explanation: As the array is assumed to be circular, the smallest letter greater than 'h' is 'a'.
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(Log(N))
 * Space complexity : O(1)
 */

const search_next_letter = function (letters, key) {
    let start = 0,
        end = letters.length - 1;
    while (end >= start) {
        let mid = Math.floor((end + start) / 2);
        let i = letters[mid];
        if (key === i) {
            let next = letters[mid + 1];
            if (i === next) {
                start = mid + 1;
            } else {
                return letters[mid + 1] || letters[0];
            }
        } else if (key < i) {
            end = mid - 1;
        } else if (key > i) {
            start = mid + 1;
        }
    }
    return letters[start] || letters[0];
};

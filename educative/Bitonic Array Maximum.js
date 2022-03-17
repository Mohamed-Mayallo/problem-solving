/**
 *  Bitonic Array Maximum
 *  Easy
 *  https://www.educative.io/courses/grokking-the-coding-interview/RMyRR6wZoYK
 */

/**
    Problem Statement

    Find the maximum value in a given Bitonic array. An array is considered bitonic if it is monotonically increasing and then monotonically decreasing. Monotonically increasing or decreasing means that for any index i in the array arr[i] != arr[i+1].

    Example 1:
    Input: [1, 3, 8, 12, 4, 2]
    Output: 12
    Explanation: The maximum number in the input bitonic array is '12'.

    Example 2:
    Input: [3, 8, 3, 1]
    Output: 8

    Example 3:
    Input: [1, 3, 8, 12]
    Output: 12

    Example 4:
    Input: [10, 9, 8]
    Output: 10
 */

/**
 *  First solution
 *  -----------------
 *  Time complexity  : O(Log(N))
 *  Space complexity : O(1)
 */

const find_max_in_bitonic_array = function (arr) {
    let start = 0,
        end = arr.length - 1;
    while (end > start) {
        let mid = Math.floor((end + start) / 2),
            m = arr[mid],
            next = arr[mid + 1];
        if (m > next) {
            end = mid;
        } else if (m < next) {
            start = mid + 1;
        }
    }
    return arr[start];
};

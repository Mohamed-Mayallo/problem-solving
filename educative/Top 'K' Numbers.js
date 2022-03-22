/**
 * Top 'K' Numbers
 * Easy
 * https://www.educative.io/courses/grokking-the-coding-interview/RM535yM9DW0
 */

/**
    Problem Statement

    Given an unsorted array of numbers, find the ‘K’ largest numbers in it.

    Note: For a detailed discussion about different approaches to solve this problem, take a look at Kth Smallest Number.

    Example 1:
    Input: [3, 1, 5, 12, 2, 11], K = 3
    Output: [5, 12, 11]

    Example 2:
    Input: [5, 12, 11, -1, 12], K = 3
    Output: [12, 11, 12]
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(NLog(K))
 * Space complexity : O(K)
 */

const find_k_largest_numbers = function (nums, k) {
    let heap = [];
    for (let i = 0; i < nums.length; i++) {
        let peek = heap[0];
        let n = nums[i];
        if (!peek) heap.push(n);
        else if (n > peek) {
            heap.push(n);
            if (heap.length > k) heap.shift();
            heap.sort((a, b) => a - b);
        }
    }
    return heap;
};

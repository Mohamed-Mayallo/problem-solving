/**
 * Kth Smallest Number
 * Easy
 * https://www.educative.io/courses/grokking-the-coding-interview/gxxPGn8vE8G
 */

/**
    Problem Statement
  
    Given an unsorted array of numbers, find Kth smallest number in it.
    Please note that it is the Kth smallest number in the sorted order, not the Kth distinct element.
    Note: For a detailed discussion about different approaches to solve this problem, take a look at Kth Smallest Number.

    Example 1:
    Input: [1, 5, 12, 2, 11, 5], K = 3
    Output: 5
    Explanation: The 3rd smallest number is '5', as the first two smaller numbers are [1, 2].

    Example 2:
    Input: [1, 5, 12, 2, 11, 5], K = 4
    Output: 5
    Explanation: The 4th smallest number is '5', as the first three small numbers are [1, 2, 5].

    Example 3:
    Input: [5, 12, 11, -1, 12], K = 3
    Output: 11
    Explanation: The 3rd smallest number is '11', as the first two small numbers are [5, -1].
  */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N Log(K))
 * Space complexity : O(K)
 */

const find_Kth_smallest_number = function (nums, k) {
    let maxHeap = [];
    for (let i = 0; i < nums.length; i++) {
        let n = nums[i];
        let peek = maxHeap[0];
        if (maxHeap.length < k) {
            maxHeap.push(n);
            maxHeap.sort((a, b) => b - a);
        } else if (n < peek) {
            maxHeap.shift();
            maxHeap.push(n);
            maxHeap.sort((a, b) => b - a);
        }
    }
    return maxHeap[0];
};

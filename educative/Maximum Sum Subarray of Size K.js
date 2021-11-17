/**
 * Maximum Sum Subarray of Size K
 * Easy
 * https://www.educative.io/courses/grokking-the-coding-interview/JPKr0kqLGNP
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(1)
 */

/**
  Problem Statement#
  Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

  Example 1:
  Input: [2, 1, 5, 1, 3, 2], k=3 
  Output: 9
  Explanation: Subarray with maximum sum is [5, 1, 3].

  Example 2:
  Input: [2, 3, 4, 1, 5], k=2 
  Output: 7
  Explanation: Subarray with maximum sum is [3, 4].
 */

const max_sub_array_of_size_k = function (k, arr) {
    let wSum = 0,
        wStart = 0,
        mx = 0;

    for (let wEnd = 0; wEnd < arr.length; wEnd++) {
        if (wEnd + 1 > k) {
            wSum = wSum - arr[wStart] + arr[wEnd];
            wStart += 1;
            if (wSum > mx) {
                mx = wSum;
            }
        } else {
            wSum += arr[wEnd];
            mx += arr[wEnd];
        }
    }

    return mx;
};

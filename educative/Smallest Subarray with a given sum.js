/**
 * Smallest Subarray with a given sum
 * Easy
 * https://www.educative.io/courses/grokking-the-coding-interview/7XMlMEQPnnQ
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(1)
 */

/**
  Problem Statement#
  Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.

  Example 1:
  Input: [2, 1, 5, 2, 3, 2], S=7 
  Output: 2
  Explanation: The smallest subarray with a sum greater than or equal to '7' is [5, 2].

  Example 2:
  Input: [2, 1, 5, 2, 8], S=7 
  Output: 1
  Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].

  Example 3:
  Input: [3, 4, 1, 1, 6], S=8 
  Output: 3
  Explanation: Smallest subarrays with a sum greater than or equal to '8' are [3, 4, 1] 
  or [1, 1, 6].
 */

const smallest_subarray_with_given_sum = function (s, arr) {
    let wSum = 0,
        wStart = 0,
        mn = Infinity;

    for (let wEnd = 0; wEnd < arr.length; wEnd++) {
        wSum += arr[wEnd];
        while (wSum >= s && wStart <= wEnd) {
            wLen = wEnd - wStart + 1;
            mn = Math.min(mn, wLen);
            wSum -= arr[wStart];
            wStart += 1;
        }
    }

    return mn === Infinity ? 0 : mn;
};

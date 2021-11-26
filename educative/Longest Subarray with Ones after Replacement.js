/**
 * Longest Subarray with Ones after Replacement
 * Hard
 * https://www.educative.io/courses/grokking-the-coding-interview/B6VypRxPolJ
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(1)
 */

/**
  Problem Statement#
  Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s, find the length of the longest contiguous subarray having all 1s.

  Example 1:
  Input: Array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2
  Output: 6
  Explanation: Replace the '0' at index 5 and 8 to have the longest contiguous subarray of 1s having length 6.

  Example 2:
  Input: Array=[0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], k=3
  Output: 9
  Explanation: Replace the '0' at index 6, 9, and 10 to have the longest contiguous subarray of 1s having length 9.
 */

const length_of_longest_substring = function (arr, k) {
    let wStart = 0,
        wMap = {},
        mx = 0,
        wOnes = 0;

    for (let wEnd = 0; wEnd < arr.length; wEnd++) {
        let wEndNum = arr[wEnd];

        if (!wMap[wEndNum]) wMap[wEndNum] = 1;
        else wMap[wEndNum]++;

        if (wEndNum === 1) wOnes = Math.max(wOnes, wMap[wEndNum]);

        let wLen = wEnd - wStart + 1;
        if (wLen - wOnes > k) {
            let wStartNum = arr[wStart];
            wMap[wStartNum]--;
            wStart++;
        }

        mx = Math.max(mx, wEnd - wStart + 1);
    }

    return mx;
};

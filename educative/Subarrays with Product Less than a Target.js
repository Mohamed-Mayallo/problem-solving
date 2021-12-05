/**
 * Subarrays with Product Less than a Target
 * Medium
 * https://www.educative.io/courses/grokking-the-coding-interview/RMV1GV1yPYz
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N^2)
 * Space complexity : O(N^3)
 */

/**
  Given an array with positive numbers and a positive target number, find all of its contiguous subarrays whose product is less than the target number.

  Example 1:
  Input: [2, 5, 3, 10], target=30 
  Output: [2], [5], [2, 5], [3], [5, 3], [10]
  Explanation: There are six contiguous subarrays whose product is less than the target.

  Example 2:
  Input: [8, 2, 6, 5], target=50 
  Output: [8], [2], [8, 2], [6], [2, 6], [5], [6, 5] 
  Explanation: There are seven contiguous subarrays whose product is less than the target.
 */

const find_subarrays = function (arr, target) {
    let result = [];
    let wStart = 0;
    for (let wEnd = 0; wEnd < arr.length; wEnd++) {
        let currentProduct = 1;
        while (currentProduct < target && wStart < arr.length) {
            let wStartNum = arr[wStart];
            currentProduct *= wStartNum;
            wStart++;
            if (currentProduct < target) result.push(arr.slice(wEnd, wStart));
        }
        currentProduct = 1;
        wStart = wEnd + 1;
    }
    return result;
};

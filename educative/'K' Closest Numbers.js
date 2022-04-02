/**
 * 'K' Closest Numbers
 * Medium
 * https://www.educative.io/courses/grokking-the-coding-interview/N8MJQNYyJPL
 */

/**
  Problem Statement
  Given a sorted number array and two integers ‘K’ and ‘X’, find ‘K’ closest numbers to ‘X’ in the array. Return the numbers in the sorted order. ‘X’ is not necessarily present in the array.

  Example 1:
  Input: [5, 6, 7, 8, 9], K = 3, X = 7
  Output: [6, 7, 8]

  Example 2:
  Input: [2, 4, 5, 6, 9], K = 3, X = 6
  Output: [4, 5, 6]

  Example 3:
  Input: [2, 4, 5, 6, 9], K = 3, X = 10
  Output: [5, 6, 9]
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(K Log(K))
 * Space complexity : O(K)
 */

const find_closest_elements = function (arr, K, X) {
  const maxHeap = [];
  for (const n of arr) {
    const peek = maxHeap[0];
    const diff = Math.abs(n - X);
    if (maxHeap.length < K) {
      maxHeap.push({ n, diff });
      if (maxHeap.length === K) maxHeap.sort((a, b) => b.diff - a.diff);
    } else if (diff < peek.diff) {
      maxHeap.shift();
      maxHeap.push({ n, diff });
      maxHeap.sort((a, b) => b.diff - a.diff);
    }
  }
  return maxHeap.sort((a, b) => a.n - b.n).map((h) => h.n);
};

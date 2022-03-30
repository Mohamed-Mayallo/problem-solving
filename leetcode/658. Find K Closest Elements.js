/**
 * 658. Find K Closest Elements
 * Medium
 * https://leetcode.com/problems/find-k-closest-elements/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(K Log(K))
 * Space complexity : O(K)
 */

var findClosestElements = function (arr, K, X) {
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

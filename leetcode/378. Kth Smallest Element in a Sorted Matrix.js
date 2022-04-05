/**
 * 378. Kth Smallest Element in a Sorted Matrix
 * Medium
 * https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : add O(M Log(M)) where M is the matrix length
 * Space complexity : add O(N) where N is the total number in arrays
 */

var kthSmallest = function (matrix, k) {
  const minHeap = [];
  for (let i = 0; i < matrix.length; i++) {
    const arr = matrix[i];
    minHeap.push({ n: arr[0], arrIndex: i, nextIndex: 1 });
  }
  minHeap.sort((a, b) => a.n - b.n);
  const merged = [];
  while (minHeap.length || merged.length < k) {
    const peek = minHeap.shift();
    merged.push(peek.n);
    if (peek.nextIndex < matrix[peek.arrIndex].length) {
      minHeap.push({
        n: matrix[peek.arrIndex][peek.nextIndex],
        arrIndex: peek.arrIndex,
        nextIndex: peek.nextIndex + 1
      });
      minHeap.sort((a, b) => a.n - b.n);
    }
  }
  return merged[k - 1];
};

/**
 * Smallest Number Range
 * Hard
 * https://www.educative.io/courses/grokking-the-coding-interview/JPGWDNRx3w2
 */

/**
  Problem Statement

  Given ‘M’ sorted arrays, find the smallest range that includes at least one number from each of the ‘M’ lists.

  Example 1:
  Input: L1=[1, 5, 8], L2=[4, 12], L3=[7, 8, 10]
  Output: [4, 7]
  Explanation: The range [4, 7] includes 5 from L1, 4 from L2 and 7 from L3.

  Example 2:
  Input: L1=[1, 9], L2=[4, 12], L3=[7, 10, 16]
  Output: [9, 12]
  Explanation: The range [9, 12] includes 9 from L1, 12 from L2 and 10 from L3.
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N log(M)) where N is the total number of elements in all the ‘M’ input arrays
 * Space complexity : O(M)
 */

const find_smallest_range = function (lists) {
  const minHeap = [];
  for (let i = 0; i < lists.length; i++) {
    const l = lists[i];
    minHeap.push({ n: l[0], arrIndex: i, nextIndex: 1 });
  }
  minHeap.sort((a, b) => a.n - b.n);
  let min = minHeap[0].n,
    max = minHeap[minHeap.length - 1].n,
    range = max - min;
  while (minHeap.length === lists.length) {
    const peek = minHeap.shift();
    if (peek.nextIndex < lists[peek.arrIndex].length) {
      minHeap.push({
        n: lists[peek.arrIndex][peek.nextIndex],
        arrIndex: peek.arrIndex,
        nextIndex: peek.nextIndex + 1
      });
      minHeap.sort((a, b) => a.n - b.n);
      const newMin = minHeap[0].n,
        newMax = minHeap[minHeap.length - 1].n,
        newDiff = newMax - newMin;
      if (newDiff < range) {
        min = newMin;
        max = newMax;
      }
      range = Math.min(range, newDiff);
    }
  }
  return [min, max];
};

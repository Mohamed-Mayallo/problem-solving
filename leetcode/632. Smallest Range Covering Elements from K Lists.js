/**
 * 632. Smallest Range Covering Elements from K Lists
 * Hard
 * https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N log(M)) where N is the total number of elements in all the ‘M’ input arrays
 * Space complexity : O(M)
 */

var smallestRange = function (lists) {
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

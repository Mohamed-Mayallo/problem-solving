/**
 * 23. Merge k Sorted Lists
 * Hard
 * https://leetcode.com/problems/merge-k-sorted-lists/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N Log(K)) where K is lists length
 * Space complexity : O(K) where K is lists length
 */

var mergeKLists = function (lists) {
  let tail = null,
    head = null;
  const minHeap = [];
  for (let node of lists) {
    minHeap.push(node);
    if (minHeap.length === lists.length)
      minHeap.sort((a, b) => (a ? a.val : Infinity) - (b ? b.val : Infinity));
  }
  let isFirstLoop = true;
  while (minHeap.length) {
    const peek = minHeap.shift();
    if (isFirstLoop) {
      tail = peek;
      head = tail;
      isFirstLoop = false;
    } else {
      if (tail) {
        tail.next = peek;
        tail = tail.next;
      }
    }
    if (peek && peek.next) {
      minHeap.push(peek.next);
      minHeap.sort((a, b) => (a ? a.val : Infinity) - (b ? b.val : Infinity));
    }
  }
  return head;
};

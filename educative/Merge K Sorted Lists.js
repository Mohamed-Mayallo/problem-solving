/**
 * Merge K Sorted Lists
 * Medium
 * https://www.educative.io/courses/grokking-the-coding-interview/Y5n0n3vAgYK
 */

/**
  Problem Statement

  Given an array of ‘K’ sorted LinkedLists, merge them into one sorted list.

  Example 1:
  Input: L1=[2, 6, 8], L2=[3, 6, 7], L3=[1, 3, 4]
  Output: [1, 2, 3, 3, 4, 6, 6, 7, 8]

  Example 2:
  Input: L1=[5, 8, 9], L2=[1, 7]
  Output: [1, 5, 7, 8, 9]
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N Log(K)) where K is lists length
 * Space complexity : O(K) where K is lists length
 */

class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const merge_lists = function (lists) {
  let tail = null,
    head = null;
  const minHeap = [];
  for (let node of lists) {
    minHeap.push(node);
    if (minHeap.length === lists.length)
      minHeap.sort((a, b) => (a ? a.value : Infinity) - (b ? b.value : Infinity));
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
      minHeap.sort((a, b) => (a ? a.value : Infinity) - (b ? b.value : Infinity));
    }
  }
  return head;
};

/**
 * Kth Largest Number in a Stream
 * Medium
 * https://www.educative.io/courses/grokking-the-coding-interview/B819G5DZBxX
 */

/**
  Problem Statement

  Design a class to efficiently find the Kth largest element in a stream of numbers.
  The class should have the following two things:
  The constructor of the class should accept an integer array containing initial numbers from the stream and an integer ‘K’.
  The class should expose a function add(int num) which will store the given number and return the Kth largest number.

  Example 1:
  Input: [3, 1, 5, 12, 2, 11], K = 4
  1. Calling add(6) should return '5'.
  2. Calling add(13) should return '6'.
  2. Calling add(4) should still return '6'.
 */

/**
 * First solution
 * -----------------
 * Time complexity  : add O(Log(K))
 * Space complexity : add O(K)
 */

class KthLargestNumberInStream {
  constructor(nums, k) {
    this.k = k;
    const minHeap = [];
    for (const n of nums) {
      this.rebalance(minHeap, n, k);
    }
    this.nums = minHeap;
  }

  rebalance(heap, num, k) {
    const peek = heap[0];
    if (heap.length < k) {
      heap.push(num);
      if (heap.length === k) {
        heap.sort((a, b) => a - b);
      }
    } else if (num > peek) {
      heap.shift();
      heap.push(num);
      heap.sort((a, b) => a - b);
    }
  }

  add(num) {
    this.rebalance(this.nums, num, this.k);
    return this.nums[0];
  }
}

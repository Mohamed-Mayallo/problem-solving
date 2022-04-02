/**
 * 703. Kth Largest Element in a Stream
 * Easy
 * https://leetcode.com/problems/kth-largest-element-in-a-stream/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : add O(Log(K))
 * Space complexity : add O(K)
 */

var KthLargest = function (k, nums) {
  this.k = k;
  const minHeap = [];
  for (const n of nums) {
    this.rebalance(minHeap, n, k);
  }
  this.nums = minHeap;
};

KthLargest.prototype.add = function (val) {
  this.rebalance(this.nums, val, this.k);
  return this.nums[0];
};

KthLargest.prototype.rebalance = function (heap, num, k) {
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
};

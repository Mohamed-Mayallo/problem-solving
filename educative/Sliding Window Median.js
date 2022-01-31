/**
 * Sliding Window Median
 * Hard
 * https://www.educative.io/courses/grokking-the-coding-interview/3Y9jm7XRrXO
 */

/**
  Problem Statement

  Given an array of numbers and a number ‘k’, find the median of all the ‘k’ sized sub-arrays (or windows) of the array.

  Example 1:
  Input: nums=[1, 2, -1, 3, 5], k = 2
  Output: [1.5, 0.5, 1.0, 4.0]
  Explanation: Lets consider all windows of size ‘2’:

  [1, 2, -1, 3, 5] -> median is 1.5
  [1, 2, -1, 3, 5] -> median is 0.5
  [1, 2, -1, 3, 5] -> median is 1.0
  [1, 2, -1, 3, 5] -> median is 4.0

  Example 2:
  Input: nums=[1, 2, -1, 3, 5], k = 3
  Output: [1.0, 2.0, 3.0]
  Explanation: Lets consider all windows of size ‘3’:

  [1, 2, -1, 3, 5] -> median is 1.0
  [1, 2, -1, 3, 5] -> median is 2.0
  [1, 2, -1, 3, 5] -> median is 3.0
 */

/**
 * First solution
 * -----------------
 * Time complexity  : inserting: O(log K), removing: O(K)
 * Space complexity : O(K)
 */

class SlidingWindowMedian {
  constructor() {
    this.minHeap = [];
    this.maxHeap = [];
  }

  addToMinHeap(num) {
    if (num <= this.minHeap[0]) {
      this.minHeap.unshift(num);
    } else if (num >= this.minHeap[this.minHeap.length - 1]) {
      this.minHeap.push(num);
    } else {
      this.minHeap.push(num);
      this.minHeap.sort((a, b) => a - b);
    }
  }

  addToMaxHeap(num) {
    if (num >= this.maxHeap[0]) {
      this.maxHeap.unshift(num);
    } else if (num <= this.maxHeap[this.maxHeap.length - 1]) {
      this.maxHeap.push(num);
    } else {
      this.maxHeap.push(num);
      this.maxHeap.sort((a, b) => b - a);
    }
  }

  removeFromMaxHeap(num) {
    let i = this.maxHeap.findIndex((n) => n === num);
    this.maxHeap.splice(i, 1);
    this.maxHeap.sort((a, b) => b - a);
  }

  removeFromMinHeap(num) {
    let i = this.minHeap.findIndex((n) => n === num);
    this.minHeap.splice(i, 1);
    this.minHeap.sort((a, b) => a - b);
  }

  findMedian() {
    if (this.maxHeap.length === this.minHeap.length) {
      return (this.maxHeap[0] + this.minHeap[0]) / 2;
    }
    return this.maxHeap[0];
  }

  rebalanceHeaps() {
    if (this.maxHeap.length > this.minHeap.length + 1) {
      let max = this.maxHeap.shift();
      this.addToMinHeap(max);
    } else if (this.maxHeap.length < this.minHeap.length) {
      let min = this.minHeap.shift();
      this.addToMaxHeap(min);
    }
  }

  find_sliding_window_median(nums, k) {
    let result = [];
    let i = 0;
    while (i <= nums.length) {
      if (this.maxHeap.length + this.minHeap.length === k) {
        result.push(this.findMedian());
      }

      let n = nums[i];
      if (n !== undefined) {
        if (!this.maxHeap.length || this.maxHeap[0] >= n) {
          this.addToMaxHeap(n);
        } else {
          this.addToMinHeap(n);
        }

        if (this.maxHeap.length + this.minHeap.length > k) {
          let removedN = nums[i - k];
          if (removedN <= this.maxHeap[0]) {
            this.removeFromMaxHeap(removedN);
          } else {
            this.removeFromMinHeap(removedN);
          }

          this.rebalanceHeaps();
        }
      }

      i++;
    }

    return result;
  }
}

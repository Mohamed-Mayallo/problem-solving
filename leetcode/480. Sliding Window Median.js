/**
 * 480. Sliding Window Median
 * Hard
 * https://leetcode.com/problems/sliding-window-median/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : inserting: O(log K), removing: O(K)
 * Space complexity : O(K)
 */

var medianSlidingWindow = function (nums, k) {
  let result = [];
  let i = 0;
  while (i <= nums.length) {
    if (
      medianSlidingWindow.prototype.maxHeap.length +
        medianSlidingWindow.prototype.minHeap.length ===
      k
    ) {
      result.push(medianSlidingWindow.prototype.findMedian());
    }

    let n = nums[i];
    if (n !== undefined) {
      if (
        !medianSlidingWindow.prototype.maxHeap.length ||
        medianSlidingWindow.prototype.maxHeap[0] >= n
      ) {
        medianSlidingWindow.prototype.addToMaxHeap(n);
      } else {
        medianSlidingWindow.prototype.addToMinHeap(n);
      }

      if (
        medianSlidingWindow.prototype.maxHeap.length +
          medianSlidingWindow.prototype.minHeap.length >
        k
      ) {
        let removedN = nums[i - k];
        if (removedN <= medianSlidingWindow.prototype.maxHeap[0]) {
          medianSlidingWindow.prototype.removeFromMaxHeap(removedN);
        } else {
          medianSlidingWindow.prototype.removeFromMinHeap(removedN);
        }
      }
      medianSlidingWindow.prototype.rebalanceHeaps();
    }
    i++;
  }

  medianSlidingWindow.prototype.minHeap = [];
  medianSlidingWindow.prototype.maxHeap = [];
  return result;
};

medianSlidingWindow.prototype.minHeap = [];
medianSlidingWindow.prototype.maxHeap = [];

medianSlidingWindow.prototype.addToMinHeap = function (num) {
  if (num <= this.minHeap[0]) {
    this.minHeap.unshift(num);
  } else if (num >= this.minHeap[this.minHeap.length - 1]) {
    this.minHeap.push(num);
  } else {
    this.minHeap.push(num);
    this.minHeap.sort((a, b) => a - b);
  }
};

medianSlidingWindow.prototype.addToMaxHeap = function (num) {
  if (num >= this.maxHeap[0]) {
    this.maxHeap.unshift(num);
  } else if (num <= this.maxHeap[this.maxHeap.length - 1]) {
    this.maxHeap.push(num);
  } else {
    this.maxHeap.push(num);
    this.maxHeap.sort((a, b) => b - a);
  }
};

medianSlidingWindow.prototype.removeFromMaxHeap = function (num) {
  let i = this.maxHeap.findIndex((n) => n === num);
  this.maxHeap.splice(i, 1);
  this.maxHeap.sort((a, b) => b - a);
};

medianSlidingWindow.prototype.removeFromMinHeap = function (num) {
  let i = this.minHeap.findIndex((n) => n === num);
  this.minHeap.splice(i, 1);
  this.minHeap.sort((a, b) => a - b);
};

medianSlidingWindow.prototype.findMedian = function () {
  if (this.maxHeap.length === this.minHeap.length) {
    return (this.maxHeap[0] + this.minHeap[0]) / 2;
  }
  return this.maxHeap[0];
};

medianSlidingWindow.prototype.rebalanceHeaps = function () {
  if (this.maxHeap.length > this.minHeap.length + 1) {
    let max = this.maxHeap.shift();
    this.addToMinHeap(max);
  } else if (this.maxHeap.length < this.minHeap.length) {
    let min = this.minHeap.shift();
    this.addToMaxHeap(min);
  }
};

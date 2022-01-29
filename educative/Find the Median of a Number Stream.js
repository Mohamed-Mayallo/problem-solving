/**
 * Find the Median of a Number Stream
 * Hard
 * https://www.educative.io/courses/grokking-the-coding-interview/3Yj2BmpyEy4
 */

/**
  Problem Statement

  Design a class to calculate the median of a number stream. The class should have the following two methods:

  insertNum(int num): stores the number in the class
  findMedian(): returns the median of all numbers inserted in the class
  If the count of numbers inserted in the class is even, the median will be the average of the middle two numbers.

  Example 1:

  1. insertNum(3)
  2. insertNum(1)
  3. findMedian() -> output: 2
  4. insertNum(5)
  5. findMedian() -> output: 3
  6. insertNum(4)
  7. findMedian() -> output: 3.5
 */

/**
 * First solution
 * -----------------
 * Time complexity  : insertNum: O(log K), findMedian: O(K)
 * Space complexity : O(K)
 */

class MedianOfAStream {
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

  rebalanceHeaps() {
    if (this.maxHeap.length > this.minHeap.length + 1) {
      let max = this.maxHeap.shift();
      this.addToMinHeap(max);
    } else if (this.maxHeap.length < this.minHeap.length) {
      let min = this.minHeap.shift();
      this.addToMaxHeap(min);
    }
  }

  insert_num(num) {
    if (!this.maxHeap.length || this.maxHeap[0] >= num) {
      this.addToMaxHeap(num);
    } else {
      this.addToMinHeap(num);
    }
    this.rebalanceHeaps();
  }

  find_median() {
    if (this.maxHeap.length === this.minHeap.length) {
      return (this.maxHeap[0] + this.minHeap[0]) / 2;
    }
    return this.maxHeap[0];
  }
}

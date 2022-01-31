/**
 * 295. Find Median from Data Stream
 * Hard
 * https://leetcode.com/problems/find-median-from-data-stream/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : addNum: O(log N), findMedian: O(1)
 * Space complexity : O(N)
 */

var MedianFinder = function () {
    this.minHeap = [];
    this.maxHeap = [];

    this.addToMinHeap = function (num) {
        if (num <= this.minHeap[0]) {
            this.minHeap.unshift(num);
        } else if (num >= this.minHeap[this.minHeap.length - 1]) {
            this.minHeap.push(num);
        } else {
            this.minHeap.push(num);
            this.minHeap.sort((a, b) => a - b);
        }
    };

    this.addToMaxHeap = function (num) {
        if (num >= this.maxHeap[0]) {
            this.maxHeap.unshift(num);
        } else if (num <= this.maxHeap[this.maxHeap.length - 1]) {
            this.maxHeap.push(num);
        } else {
            this.maxHeap.push(num);
            this.maxHeap.sort((a, b) => b - a);
        }
    };
};

MedianFinder.prototype.addNum = function (num) {
    if (!this.maxHeap.length || this.maxHeap[0] >= num) {
        this.addToMaxHeap(num);
    } else {
        this.addToMinHeap(num);
    }

    if (this.maxHeap.length > this.minHeap.length + 1) {
        let max = this.maxHeap.shift();
        this.addToMinHeap(max);
    } else if (this.maxHeap.length < this.minHeap.length) {
        let min = this.minHeap.shift();
        this.addToMaxHeap(min);
    }
};

MedianFinder.prototype.findMedian = function () {
    if (this.maxHeap.length === this.minHeap.length) {
        return (this.maxHeap[0] + this.minHeap[0]) / 2;
    }
    return this.maxHeap[0];
};

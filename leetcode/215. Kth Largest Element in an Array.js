/**
 * 215. Kth Largest Element in an Array
 * Medium
 * https://leetcode.com/problems/kth-largest-element-in-an-array/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(NLog(K))
 * Space complexity : O(K)
 */

var findKthLargest = function (nums, k) {
    let minHeap = [];
    for (let i = 0; i < nums.length; i++) {
        let n = nums[i],
            peek = minHeap[0];
        if (minHeap.length < k) {
            minHeap.push(n);
            minHeap.sort((a, b) => a - b);
        } else if (n > peek) {
            minHeap.shift();
            minHeap.push(n);
            minHeap.sort((a, b) => a - b);
        }
    }
    return minHeap[0];
};

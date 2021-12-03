/**
 * 15. 3Sum
 * Medium
 * https://leetcode.com/problems/3sum/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N^2)
 * Space complexity : O(N)
 */

var threeSum = function (nums) {
    if (nums.length < 3) return [];

    let triplets = [];
    let sortedArr = nums.sort((a, b) => a - b);

    for (let i = 0; i < sortedArr.length; i++) {
        let targetSum = -sortedArr[i];
        let leftPointer = i + 1;
        let rightPointer = sortedArr.length - 1;

        if (sortedArr[i] === sortedArr[i - 1]) continue;

        while (leftPointer < rightPointer) {
            let left = sortedArr[leftPointer];
            let right = sortedArr[rightPointer];

            if (left + right === targetSum) {
                triplets.push([left, right, -targetSum]);
                while (left === sortedArr[leftPointer + 1]) leftPointer++;
                while (right === sortedArr[rightPointer - 1]) rightPointer--;
                leftPointer++;
                rightPointer--;
            } else if (targetSum < left + right) {
                rightPointer--;
            } else if (targetSum > left + right) {
                leftPointer++;
            }
        }
    }

    return triplets;
};

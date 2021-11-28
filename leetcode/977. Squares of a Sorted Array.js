/**
 * 977. Squares of a Sorted Array
 * Easy
 * https://leetcode.com/problems/squares-of-a-sorted-array/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(N)
 */

var sortedSquares = function (nums) {
    let squares = [],
        leftPointer = 0,
        rightPointer = nums.length - 1,
        indexOfGreater = nums.length - 1;

    while (leftPointer <= rightPointer) {
        let left = nums[leftPointer] * nums[leftPointer],
            right = nums[rightPointer] * nums[rightPointer];

        if (left < right) {
            squares[indexOfGreater] = right;
            rightPointer--;
        } else if (left > right) {
            squares[indexOfGreater] = left;
            leftPointer++;
        } else {
            squares[indexOfGreater] = left;
            leftPointer++;
        }

        indexOfGreater--;
    }

    return squares;
};

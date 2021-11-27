/**
 * 26. Remove Duplicates from Sorted Array
 * Easy
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(1)
 */

var removeDuplicates = function (nums) {
    let firstPointer = 0,
        secondPointer = 0;

    while (firstPointer < nums.length) {
        if (nums[firstPointer] !== nums[firstPointer - 1]) {
            nums[secondPointer] = nums[firstPointer];
            secondPointer++;
        }
        firstPointer++;
    }

    return secondPointer;
};

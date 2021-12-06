/**
 * 75. Sort Colors
 * Medium
 * https://leetcode.com/problems/sort-colors/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(1)
 */

var sortColors = function (nums) {
    let minPointer = 0,
        maxPointer = nums.length - 1,
        i = 0;
    while (i <= maxPointer) {
        let n = nums[i];
        if (n === 0) {
            [nums[i], nums[minPointer]] = [nums[minPointer], nums[i]];
            i++;
            minPointer++;
        } else if (n === 2) {
            [nums[i], nums[maxPointer]] = [nums[maxPointer], nums[i]];
            maxPointer--;
        } else if (n === 1) {
            i++;
        }
    }
    return nums;
};

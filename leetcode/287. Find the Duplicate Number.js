/**
 * 287. Find the Duplicate Number
 * Medium
 * https://leetcode.com/problems/find-the-duplicate-number/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(1)
 */

var findDuplicate = function (nums) {
    let i = 0;
    while (i < nums.length) {
        let n = nums[i] - 1;
        if (nums[i] !== nums[n]) [nums[i], nums[n]] = [nums[n], nums[i]];
        else i++;
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) return nums[i];
    }
    return -1;
};

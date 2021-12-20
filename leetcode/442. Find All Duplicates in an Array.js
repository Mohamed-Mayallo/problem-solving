/**
 * 442. Find All Duplicates in an Array
 * Medium
 * https://leetcode.com/problems/find-all-duplicates-in-an-array/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(1)
 */

var findDuplicates = function (nums) {
    let duplicateNumbers = [];
    let i = 0;
    while (i < nums.length) {
        let n = nums[i] - 1;
        if (nums[i] !== nums[n]) [nums[i], nums[n]] = [nums[n], nums[i]];
        else i++;
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) duplicateNumbers.push(nums[i]);
    }
    return duplicateNumbers;
};

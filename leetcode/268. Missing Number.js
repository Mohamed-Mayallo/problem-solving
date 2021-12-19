/**
 * 268. Missing Number
 * Easy
 * https://leetcode.com/problems/missing-number/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(1)
 */

var missingNumber = function (nums) {
    let i = 0;
    while (i < nums.length) {
        let n = nums[i];
        if (n < nums.length && n !== i) {
            [nums[i], nums[n]] = [nums[n], nums[i]];
        } else i++;
    }
    for (let i = 0; i <= nums.length; i++) {
        if (i !== nums[i]) return i;
    }
    return -1;
};

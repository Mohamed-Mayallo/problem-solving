/**
 * 136. Single Number
 * Easy
 * https://leetcode.com/problems/single-number/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(1)
 */

var singleNumber = function (nums) {
    let num = 0;
    for (let i = 0; i < nums.length; i++) {
        num ^= nums[i];
    }
    return num;
};

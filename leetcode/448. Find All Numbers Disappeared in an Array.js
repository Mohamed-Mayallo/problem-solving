/**
 * 448. Find All Numbers Disappeared in an Array
 * Easy
 * https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(1)
 */

var findDisappearedNumbers = function (nums) {
    let missingNumbers = [];
    let i = 0;
    while (i < nums.length) {
        let n = nums[i] - 1;
        if (nums[i] !== nums[n]) {
            [nums[i], nums[n]] = [nums[n], nums[i]];
        } else i++;
    }
    for (let j = 0; j < nums.length; j++) {
        if (j + 1 !== nums[j]) missingNumbers.push(j + 1);
    }
    return missingNumbers;
};

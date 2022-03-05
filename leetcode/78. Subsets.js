/**
 * 78. Subsets
 * Medium
 * https://leetcode.com/problems/subsets/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N * 2​^N)
 * Space complexity : O(N * 2​^N)
 */

var subsets = function (nums) {
    const subsets = [[]];
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        const len = subsets.length;
        for (let j = 0; j < len; j++) {
            const st = subsets[j];
            const sub = [...st, n];
            subsets.push(sub);
        }
    }
    return subsets;
};

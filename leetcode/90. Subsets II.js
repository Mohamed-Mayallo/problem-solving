/**
 * 90. Subsets II
 * Medium
 * https://leetcode.com/problems/subsets-ii/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N * 2​^N)
 * Space complexity : O(N * 2​^N)
 */

var subsetsWithDup = function (nums) {
    nums.sort((a, b) => a - b);
    const subsets = [[]];
    let prevSubsets = [];
    for (let j = 0; j < nums.length; j++) {
        let n = nums[j];
        let newSubsets = [];
        let isDub = n === nums[j - 1];
        let len = isDub ? prevSubsets.length : subsets.length;
        for (let i = 0; i < len; i++) {
            let subs = isDub ? prevSubsets : subsets;
            newSubsets.push([...subs[i], n]);
        }
        prevSubsets = newSubsets;
        subsets.push(...newSubsets);
        newSubsets = [];
    }
    return subsets;
};

/**
 * 46. Permutations
 * Medium
 * https://leetcode.com/problems/permutations/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N * N!)
 * Space complexity : O(N * N!)
 */

var permute = function (nums) {
    if (!nums) return [];
    let result = [[nums[0]]];
    for (let n = 1; n < nums.length; n++) {
        let num = nums[n];
        let setLen = result.length;
        let newSet = [];
        for (let i = 0; i < setLen; i++) {
            let item = result[i];
            for (let j = 0; j <= item.length; j++) {
                let jItem = [...item];
                jItem.splice(j, 0, num);
                newSet.push(jItem);
            }
        }
        result = newSet;
    }
    return result;
};

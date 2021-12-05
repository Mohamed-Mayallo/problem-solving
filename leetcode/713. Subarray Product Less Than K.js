/**
 * 713. Subarray Product Less Than K
 * Medium
 * https://leetcode.com/problems/subarray-product-less-than-k/submissions/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N^2)
 * Space complexity : O(N^3)
 */

var numSubarrayProductLessThanK = function (nums, k) {
    let result = 0;
    let wStart = 0;
    for (let wEnd = 0; wEnd < nums.length; wEnd++) {
        let currentProduct = 1;
        while (currentProduct < k && wStart < nums.length) {
            let wStartNum = nums[wStart];
            currentProduct *= wStartNum;
            wStart++;
            if (currentProduct < k) result++;
        }
        currentProduct = 1;
        wStart = wEnd + 1;
    }
    return result;
};

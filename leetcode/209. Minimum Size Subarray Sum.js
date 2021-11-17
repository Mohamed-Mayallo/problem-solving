/**
 * 209. Minimum Size Subarray Sum
 * Medium
 * https://leetcode.com/problems/minimum-size-subarray-sum/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(1)
 */

var minSubArrayLen = function (target, nums) {
    let wSum = 0,
        wStart = 0,
        mn = Infinity;

    for (let wEnd = 0; wEnd < nums.length; wEnd++) {
        wSum += nums[wEnd];
        while (wSum >= target && wStart <= wEnd) {
            wLen = wEnd - wStart + 1;
            mn = Math.min(mn, wLen);
            wSum -= nums[wStart];
            wStart += 1;
        }
    }

    return mn === Infinity ? 0 : mn;
};

/**
 * 1004. Max Consecutive Ones III
 * Medium
 * https://leetcode.com/problems/max-consecutive-ones-iii/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(1)
 */

var longestOnes = function (nums, k) {
    let wStart = 0,
        wMap = {},
        mx = 0,
        wOnes = 0;

    for (let wEnd = 0; wEnd < nums.length; wEnd++) {
        let wEndNum = nums[wEnd];

        if (!wMap[wEndNum]) wMap[wEndNum] = 1;
        else wMap[wEndNum]++;

        if (wEndNum === 1) wOnes = Math.max(wOnes, wMap[wEndNum]);

        let wLen = wEnd - wStart + 1;
        if (wLen - wOnes > k) {
            let wStartNum = nums[wStart];
            wMap[wStartNum]--;
            wStart++;
        }

        mx = Math.max(mx, wEnd - wStart + 1);
    }

    return mx;
};

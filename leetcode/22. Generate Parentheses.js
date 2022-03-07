/**
 * 22. Generate Parentheses
 * Medium
 * https://leetcode.com/problems/generate-parentheses/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N * 2^N)
 * Space complexity : O(N * 2^N)
 */

var generateParenthesis = function (num) {
    if (num <= 0) return [];
    let result = [];
    while (true) {
        let temp = [];
        if (!result.length) result.push({ val: "(", open: 1, close: 0 });
        else {
            for (let item of result) {
                if (item.open < num) {
                    temp.push({
                        val: item.val + "(",
                        open: item.open + 1,
                        close: item.close,
                    });
                }
                if (item.close < num && item.close < item.open) {
                    temp.push({
                        val: item.val + ")",
                        open: item.open,
                        close: item.close + 1,
                    });
                }
            }
            result = temp;
        }
        if (result.find((a) => a.close === num)) break;
    }
    return result.map((r) => r.val);
};

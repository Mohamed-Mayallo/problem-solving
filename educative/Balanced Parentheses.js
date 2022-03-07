/**
 *  Balanced Parentheses
 *  Hard
 *  https://www.educative.io/courses/grokking-the-coding-interview/NEXBg8YA5A2
 */

/**
    Problem Statement

    For a given number ‘N’, write a function to generate all combination of ‘N’ pairs of balanced parentheses.

    Example 1:
    Input: N=2
    Output: (()), ()()

    Example 2:
    Input: N=3
    Output: ((())), (()()), (())(), ()(()), ()()()
 */

/**
 *  First solution
 *  -----------------
 *  Time complexity  : O(N * 2^N)
 *  Space complexity : O(N * 2^N)
 */

const generate_valid_parentheses = function (num) {
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

/**
 * 347. Top K Frequent Elements
 * Medium
 * https://leetcode.com/problems/top-k-frequent-elements/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N Log(K))
 * Space complexity : O(N)
 */

var topKFrequent = function (nums, k) {
    const topNumbers = [];
    const map = {};
    for (let n of nums) {
        if (n in map) map[n]++;
        else map[n] = 1;
    }
    for (let ky in map) {
        const peek = topNumbers[0];
        if (topNumbers.length < k) {
            topNumbers.push({ n: ky, f: map[ky] });
            if (topNumbers.length === k) topNumbers.sort((a, b) => a.f - b.f);
        } else if (map[ky] > peek.f) {
            topNumbers.shift();
            topNumbers.push({ n: ky, f: map[ky] });
            topNumbers.sort((a, b) => a.f - b.f);
        }
    }
    return topNumbers.map((n) => n.n);
};

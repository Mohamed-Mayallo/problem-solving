/**
 *  Top 'K' Frequent Numbers
 *  Medium
 *  https://www.educative.io/courses/grokking-the-coding-interview/B89rvR6XZ3J
 */

/**
    Problem Statement

    Given an unsorted array of numbers, find the top ‘K’ frequently occurring numbers in it.

    Example 1:

    Input: [1, 3, 5, 12, 11, 12, 11], K = 2
    Output: [12, 11]
    Explanation: Both '11' and '12' appeared twice.
    Example 2:

    Input: [5, 12, 11, 3, 11], K = 2
    Output: [11, 5] or [11, 12] or [11, 3]
    Explanation: Only '11' appeared twice, all other numbers appeared once.
 */

/**
 *  First solution
 *  -----------------
 *  Time complexity  : O(N log(K))
 *  Space complexity : O(N)
 */

const find_k_frequent_numbers = function (nums, k) {
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

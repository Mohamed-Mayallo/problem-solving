/**
 * 56. Merge Intervals
 * Medium
 * https://leetcode.com/problems/merge-intervals/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(Nlog(n))
 * Space complexity : O(N)
 */

var merge = function (intervals) {
    let merged = [];
    if (intervals.length < 2) return intervals;
    intervals.sort((a, b) => a[0] - b[0]);
    let start = intervals[0][0],
        end = intervals[0][1];
    for (let i = 1; i < intervals.length; i++) {
        let interval = intervals[i];
        if (interval[0] <= end) {
            end = Math.max(end, interval[1]);
        } else {
            merged.push([start, end]);
            start = interval[0];
            end = interval[1];
        }
    }
    merged.push([start, end]);
    return merged;
};

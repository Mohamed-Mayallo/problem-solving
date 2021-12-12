/**
 * 57. Insert Interval
 * Medium
 * https://leetcode.com/problems/insert-interval/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(Nlog(n))
 * Space complexity : O(N)
 */

var insert = function (intervals, newInterval) {
    let newIntervals = [...intervals, newInterval];
    if (newIntervals.length < 2) return newIntervals;
    newIntervals.sort((a, b) => a[0] - b[0]);
    let merged = [];
    let start = newIntervals[0][0],
        end = newIntervals[0][1];
    for (let i = 1; i < newIntervals.length; i++) {
        let interval = newIntervals[i];
        if (interval[0] <= end) end = Math.max(end, interval[1]);
        else {
            merged.push([start, end]);
            start = interval[0];
            end = interval[1];
        }
    }
    merged.push([start, end]);
    return merged;
};

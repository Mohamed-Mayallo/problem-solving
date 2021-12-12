/**
 * Insert Interval
 * Medium
 * https://www.educative.io/courses/grokking-the-coding-interview/3jKlyNMJPEM
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(Nlog(N))
 * Space complexity : O(N)
 */

/**
  Problem Statement#
  Given a list of non-overlapping intervals sorted by their start time, insert a given interval at the correct position and merge all necessary intervals to produce a list that has only mutually exclusive intervals.

  Example 1:
  Input: Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,6]
  Output: [[1,3], [4,7], [8,12]]
  Explanation: After insertion, since [4,6] overlaps with [5,7], we merged them into one [4,7].

  Example 2:
  Input: Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,10]
  Output: [[1,3], [4,12]]
  Explanation: After insertion, since [4,10] overlaps with [5,7] & [8,12], we merged them into [4,12].

  Example 3:
  Input: Intervals=[[2,3],[5,7]], New Interval=[1,4]
  Output: [[1,4], [5,7]]
  Explanation: After insertion, since [1,4] overlaps with [2,3], we merged them into one [1,4].
 */

class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

    print_interval() {
        process.stdout.write(`[${this.start}, ${this.end}]`);
    }
}

const insert = function (intervals, new_interval) {
    let newIntervals = [...intervals, new_interval];
    if (newIntervals.length < 2) return newIntervals;
    newIntervals.sort((a, b) => a.start - b.start);
    let merged = [];
    let start = newIntervals[0].start,
        end = newIntervals[0].end;
    for (let i = 1; i < newIntervals.length; i++) {
        let interval = newIntervals[i];
        if (interval.start <= end) end = Math.max(end, interval.end);
        else {
            merged.push(new Interval(start, end));
            start = interval.start;
            end = interval.end;
        }
    }
    merged.push(new Interval(start, end));
    return merged;
};

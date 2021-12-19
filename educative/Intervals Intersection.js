/**
 * Intervals Intersection
 * Medium
 * https://www.educative.io/courses/grokking-the-coding-interview/JExVVqRAN9D
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(1)
 */

/**
  Problem Statement#
  Given two lists of intervals, find the intersection of these two lists. Each list consists of disjoint intervals sorted on their start time.

  Example 1:
  Input: arr1=[[1, 3], [5, 6], [7, 9]], arr2=[[2, 3], [5, 7]]
  Output: [2, 3], [5, 6], [7, 7]
  Explanation: The output list contains the common intervals between the two lists.

  Example 2:
  Input: arr1=[[1, 3], [5, 7], [9, 12]], arr2=[[5, 10]]
  Output: [5, 7], [9, 10]
  Explanation: The output list contains the common intervals between the two lists.
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

const merge = function (intervals_a, intervals_b) {
    let result = [];
    let i = 0,
        j = 0;
    while (i < intervals_a.length && j < intervals_b.length) {
        let a = intervals_a[i],
            b = intervals_b[j];
        let aIntervalB = a.start >= b.start && b.end >= a.start;
        let bIntervalA = b.start >= a.start && a.end >= b.start;
        if (aIntervalB || bIntervalA) {
            result.push(new Interval(Math.max(a.start, b.start), Math.min(a.end, b.end)));
        }
        if (a.end < b.end) {
            i++;
        } else {
            j++;
        }
    }
    return result;
};

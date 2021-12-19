/**
 * Conflicting Appointments
 * Medium
 * https://www.educative.io/courses/grokking-the-coding-interview/qVV79nGVgAG
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(Nlog(N))
 * Space complexity : O(N)
 */

/**
  Problem Statement

  Given an array of intervals representing ‘N’ appointments, find out if a person can attend all the appointments.

  Example 1:
  Appointments: [[1,4], [2,5], [7,9]]
  Output: false
  Explanation: Since [1,4] and [2,5] overlap, a person cannot attend both of these appointments.

  Example 2:
  Appointments: [[6,7], [2,4], [8,12]]
  Output: true
  Explanation: None of the appointments overlap, therefore a person can attend all of them.

  Example 3:
  Appointments: [[4,5], [2,3], [3,6]]
  Output: false
  Explanation: Since [4,5] and [3,6] overlap, a person cannot attend both of these appointments.
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

const can_attend_all_appointments = function (intervals) {
    if (intervals.length <= 1) return true;
    intervals.sort((a, b) => a.start - b.start);
    let start = intervals[0].start,
        end = intervals[0].end;
    for (let i = 1; i < intervals.length; i++) {
        let interval = intervals[i];
        if (interval.start < end && interval.start > start) return false;
        else {
            start = interval.start;
            end = interval.end;
        }
    }
    return true;
};

/**
 * Maximum CPU Load
 * Hard
 * https://www.educative.io/courses/grokking-the-coding-interview/xVlyyv3rR93
 */

/**
  Problem Statement

  We are given a list of Jobs. Each job has a Start time, an End time, and a CPU load when it is running. Our goal is to find the maximum CPU load at any time if all the jobs are running on the same machine.

  Example 1:
  Jobs: [[1,4,3], [2,5,4], [7,9,6]]
  Output: 7
  Explanation: Since [1,4,3] and [2,5,4] overlap, their maximum CPU load (3+4=7) will be when both the 
  jobs are running at the same time i.e., during the time interval (2,4).

  Example 2:
  Jobs: [[6,7,10], [2,4,11], [8,12,15]]
  Output: 15
  Explanation: None of the jobs overlap, therefore we will take the maximum load of any job which is 15.

  Example 3:
  Jobs: [[1,4,2], [2,4,1], [3,6,5]]
  Output: 8
  Explanation: Maximum CPU load will be 8 as all jobs overlap during the time interval [3,4]. 
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N Log(N))
 * Space complexity : O(N)
 */

class Job {
  constructor(start, end, cpu_load) {
    this.start = start;
    this.end = end;
    this.cpu_load = cpu_load;
  }
};

const find_max_cpu_load = function(jobs) {
  jobs.sort((a, b) => a.start - b.start);
  let s = jobs[0].start,
    e = jobs[0].end,
    max = jobs[0].cpu_load,
    currentMax = jobs[0].cpu_load;
  for (let i = 1; i < jobs.length; i++) {
    let j = jobs[i];
    if (j.start <= e) {
      currentMax += j.cpu_load;
      max = Math.max(currentMax, max);
      e = Math.max(e, j.end);
    } else {
      currentMax = j.cpu_load;
      s = j.start;
      e = j.end;
    }
  }
  return Math.max(max, currentMax);
};

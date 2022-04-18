/**
 * Subset Sum
 * Medium
 * https://www.educative.io/courses/grokking-the-coding-interview/gxrnL0GQGqk
 */

/**
  Problem Statement

  Given a set of positive numbers, determine if a subset exists whose sum is equal to a given number ‘S’.

  Example 1:#
  Input: {1, 2, 3, 7}, S=6
  Output: True
  The given set has a subset whose sum is '6': {1, 2, 3}

  Example 2:#
  Input: {1, 2, 7, 1, 5}, S=10
  Output: True
  The given set has a subset whose sum is '10': {1, 2, 7}
  Example 3:#

  Input: {1, 3, 4, 8}, S=6
  Output: False
  The given set does not have any subset whose sum is equal to '6'.
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N∗S)  where ‘N’ represents total numbers and ‘S’ is the required sum
 * Space complexity : O(N∗S)  where ‘N’ represents total numbers and ‘S’ is the required sum
 */

// Top - Down dynamic programming
const canPartition = function (num, sum) {
  const db = [];
  function loop(s, i) {
    if (i >= num.length) {
      if (s === 0) return true;
      else return false;
    }
    db[i] = db[i] || [];
    if (db[i][s] !== undefined) return db[i][s];
    let s1 = 0;
    if (num[i] <= s) {
      s1 = loop(s - num[i], i + 1);
    }
    let s2 = loop(s, i + 1);
    db[i][s] = s1 || s2;
    return db[i][s];
  }
  return loop(sum, 0);
};

/**
 * Second solution
 * -----------------
 * Time complexity  : O(N∗S)  where ‘N’ represents total numbers and ‘S’ is the required sum
 * Space complexity : O(N∗S)  where ‘N’ represents total numbers and ‘S’ is the required sum
 */

// Bottom - Up dynamic programming
const canPartition = function (num, sum) {
  const db = Array.from({ length: num.length }, () => []).map(() =>
    Array.from({ length: sum + 1 }, () => false)
  );
  for (let i = 0; i <= sum; i++) {
    if (i === num[0]) db[0][i] === num[0];
  }
  for (let i = 0; i < num.length; i++) {
    db[i][0] = true;
  }
  for (let i = 1; i < num.length; i++) {
    for (let n = 1; n <= sum; n++) {
      db[i][n] = db[i - 1][n] || db[i - 1][n - num[i]] || false;
    }
  }
  return db[num.length - 1][sum];
};

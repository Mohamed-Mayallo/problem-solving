/**
 * Minimum Subset Sum Difference
 * Hard
 * https://www.educative.io/courses/grokking-the-coding-interview/mE53y85Wqw9
 */

/**
  Problem Statement

  Given a set of positive numbers, partition the set into two subsets with minimum difference between their subset sums.

  Example 1:#
  Input: {1, 2, 3, 9}
  Output: 3
  Explanation: We can partition the given set into two subsets where minimum absolute difference 
  between the sum of numbers is '3'. Following are the two subsets: {1, 2, 3} & {9}.

  Example 2:#
  Input: {1, 2, 7, 1, 5}
  Output: 0
  Explanation: We can partition the given set into two subsets where minimum absolute difference 
  between the sum of number is '0'. Following are the two subsets: {1, 2, 5} & {7, 1}.

  Example 3:#
  Input: {1, 3, 100, 4}
  Output: 92
  Explanation: We can partition the given set into two subsets where minimum absolute difference 
  between the sum of numbers is '92'. Here are the two subsets: {1, 3, 4} & {100}.
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N∗S)  where ‘N’ represents total numbers and ‘S’ is the required sum
 * Space complexity : O(N∗S)  where ‘N’ represents total numbers and ‘S’ is the required sum
 */
let canPartition = function (num) {
  let db = [];
  function loop(i, s1, s2) {
    if (i >= num.length) return Math.abs(s1 - s2);
    db[i] = db[i] || [];
    if (db[i][s1]) return db[i][s1];
    let diff1 = loop(i + 1, s1 - num[i], s2);
    let diff2 = loop(i + 1, s1, s2 - num[i]);
    db[i][s1] = Math.min(diff1, diff2);
    return db[i][s1];
  }
  return loop(0, 0, 0);
};

/**
 * Second solution
 * -----------------
 * Time complexity  : O(N∗S)  where ‘N’ represents total numbers and ‘S’ is the required sum
 * Space complexity : O(N∗S)  where ‘N’ represents total numbers and ‘S’ is the required sum
 */
let canPartition = function (num) {
  let sum = num.reduce((a, b) => a + b, 0);
  let reqSum = Math.floor(sum / 2);
  let db = Array.from({ length: num.length }, () => []).map(() =>
    Array.from({ length: reqSum + 1 }, () => false)
  );
  for (let i = 0; i <= reqSum; i++) db[0][i] = i === num[0];
  for (let i = 0; i < num.length; i++) db[i][0] = true;
  for (let i = 1; i < num.length; i++)
    for (let s = 1; s <= reqSum; s++) db[i][s] = db[i - 1][s] || db[i - 1][s - num[i]] || false;
  let s1 = Infinity;
  for (i = reqSum; i >= 0; i--) {
    if (db[num.length - 1][i] === true) {
      s1 = Math.min(s1, Math.abs(sum - i));
    }
  }
  let s2 = sum - s1;
  return Math.abs(s2 - s1);
};

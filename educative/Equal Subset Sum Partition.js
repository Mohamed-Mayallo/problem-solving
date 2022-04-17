/**
 * Equal Subset Sum Partition
 * Medium
 * https://www.educative.io/courses/grokking-the-coding-interview/g7QYlD8RwRr
 */

/**
  Problem Statement

  Given a set of positive numbers, find if we can partition it into two subsets such that the sum of elements in both subsets is equal.

  Example 1:
  Input: {1, 2, 3, 4}
  Output: True
  Explanation: The given set can be partitioned into two subsets with equal sum: {1, 4} & {2, 3}

  Example 2:
  Input: {1, 1, 3, 4, 7}
  Output: True
  Explanation: The given set can be partitioned into two subsets with equal sum: {1, 3, 4} & {1, 7}

  Example 3:
  Input: {2, 3, 4, 6}
  Output: False
  Explanation: The given set cannot be partitioned into two subsets with equal sum.
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N∗S) where ‘N’ represents total numbers and ‘S’ is the total sum of all the numbers.
 * Space complexity : O(N∗S) where ‘N’ represents total numbers and ‘S’ is the total sum of all the numbers.
 */

const can_partition = function (num) {
  const sum = num.reduce((a, b) => a + b, 0);
  if (sum % 2 !== 0) return false;

  let memo = [];
  function loop(t, i) {
    if (t === 0) return true;
    if (t <= 0 || i >= num.length) return false;

    memo[t] = memo[t] || [];
    if (memo[t][i] !== undefined) return memo[t][i];
    let can = false;
    if (num[i] <= t) {
      can = loop(t - num[i], i + 1);
    }
    memo[t][i] = loop(t, i + 1) || can;
    return memo[t][i];
  }

  return loop(sum / 2, 0);
};

/**
 * Second solution
 * -----------------
 * Time complexity  : O(N∗S) where ‘N’ represents total numbers and ‘S’ is the total sum of all the numbers.
 * Space complexity : O(N∗S) where ‘N’ represents total numbers and ‘S’ is the total sum of all the numbers.
 */

// Bottom-Up Dynamic Programming
const can_partition = function (num) {
  const sum = num.reduce((a, b) => a + b, 0);
  if (sum % 2 !== 0) return false;
  const target = sum / 2;

  let memo = Array.from({ length: num.length }, () => []).map(() =>
    Array.from({ length: target + 1 }, () => false)
  );

  for (let i = 0; i < num.length - 1; i++) {
    memo[i][0] = true;
  }

  for (let i = 1; i <= target; i++) {
    memo[0][i] = i === num[0];
  }

  for (let i = 1; i < num.length; i++) {
    for (let n = 1; n <= target; n++) {
      memo[i][n] = memo[i - 1][n] || memo[i - 1][n - num[i]];
    }
  }

  return !!memo[num.length - 1][target];
};

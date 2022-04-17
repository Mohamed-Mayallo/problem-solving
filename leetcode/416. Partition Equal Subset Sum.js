/**
 * 416. Partition Equal Subset Sum
 * Medium
 * https://leetcode.com/problems/partition-equal-subset-sum/submissions/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N∗S) where ‘N’ represents total numbers and ‘S’ is the total sum of all the numbers.
 * Space complexity : O(N∗S) where ‘N’ represents total numbers and ‘S’ is the total sum of all the numbers.
 */

// Top-Down Dynamic Programming
var canPartition = function (nums) {
  const sum = nums.reduce((a, b) => a + b, 0);
  if (sum % 2 !== 0) return false;

  let memo = [];
  function loop(t, i) {
    if (t === 0) return true;
    if (t <= 0 || i >= nums.length) return false;

    memo[t] = memo[t] || [];
    if (memo[t][i] !== undefined) return memo[t][i];
    let can = false;
    if (nums[i] <= t) {
      can = loop(t - nums[i], i + 1);
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
var canPartition = function (nums) {
  const sum = nums.reduce((a, b) => a + b, 0);
  if (sum % 2 !== 0) return false;
  const target = sum / 2;

  let memo = Array.from({ length: nums.length }, () => []).map(() =>
    Array.from({ length: target + 1 }, () => false)
  );

  for (let i = 0; i < nums.length - 1; i++) {
    memo[i][0] = true;
  }

  for (let i = 1; i <= target; i++) {
    memo[0][i] = i === nums[0];
  }

  for (let i = 1; i < nums.length; i++) {
    for (let n = 1; n <= target; n++) {
      memo[i][n] = memo[i - 1][n] || memo[i - 1][n - nums[i]];
    }
  }

  return !!memo[nums.length - 1][target];
};

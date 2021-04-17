/**
 * 392. Is Subsequence
 * Easy
 * https://leetcode.com/problems/is-subsequence/
 */

/**
 * Time complexity  : O(N)
 * Space complexity : O(1)
 */

var isSubsequence = function (s, t) {
  let i = 0,
    j = 0;
  if (!s) return true;
  while (i < s.length && j < t.length) {
    let iS = s[i],
      jT = t[j];
    if (iS === jT) i++;
    j++;
  }
  return i > s.length - 1;
};
isSubsequence("acb", "ahbgdc");

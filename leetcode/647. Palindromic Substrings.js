/**
 * 647. Palindromic Substrings
 * Medium
 * https://leetcode.com/problems/palindromic-substrings/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N^3)
 * Space complexity : O(1)
 */

var countSubstrings = function (s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (isPalindrome(s, i, j)) count++;
    }
  }
  return count;
};

var isPalindrome = function (str, start, end) {
  if (start === end) return true;
  while (start < end) {
    if (str[start] !== str[end]) return false;
    start++;
    end--;
  }
  return true;
};

/**
 * Second solution
 * -----------------
 * Time complexity  : O(N^2)
 * Space complexity : O(1)
 */

var countSubstrings = function (s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    count += getPalindromeCount(s, i);
  }
  return count;
};

var getPalindromeCount = function (str, center) {
  let count = 1,
    start = center - 1,
    end = center + 1;
  while (start >= 0 && end < str.length) {
    if (str[start--] === str[end++]) count++;
    else break;
  }

  start = center;
  end = center + 1;
  while (start >= 0 && end < str.length) {
    if (str[start--] === str[end++]) count++;
    else break;
  }
  return count;
};

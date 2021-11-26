/**
 * Longest Substring with Same Letters after Replacement
 * Hard
 * https://www.educative.io/courses/grokking-the-coding-interview/R8DVgjq78yR
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(1)
 */

/**
  Problem Statement#
  Given a string with lowercase letters only, if you are allowed to replace no more than k letters with any letter, find the length of the longest substring having the same letters after replacement.

  Example 1:
  Input: String="aabccbb", k=2
  Output: 5
  Explanation: Replace the two 'c' with 'b' to have the longest repeating substring "bbbbb".

  Example 2:
  Input: String="abbcb", k=1
  Output: 4
  Explanation: Replace the 'c' with 'b' to have the longest repeating substring "bbbb".

  Example 3:
  Input: String="abccde", k=1
  Output: 3
  Explanation: Replace the 'b' or 'd' with 'c' to have the longest repeating substring "ccc".
 */

const length_of_longest_substring = function (str, k) {
    let wStart = 0,
        wMaxCount = 0,
        mx = 0,
        map = {};

    for (let wEnd = 0; wEnd < str.length; wEnd++) {
        let wEndLtr = str[wEnd];

        if (!map[wEndLtr]) map[wEndLtr] = 1;
        else map[wEndLtr]++;

        wMaxCount = Math.max(wMaxCount, map[wEndLtr]);

        let wLen = wEnd - wStart + 1;
        if (wLen - wMaxCount > k) {
            let wStartLtr = str[wStart];
            map[wStartLtr]--;
            wStart++;
        }

        mx = Math.max(mx, wEnd - wStart + 1);
    }

    return mx;
};

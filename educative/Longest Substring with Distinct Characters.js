/**
 * Longest Substring with Distinct Characters
 * Hard
 * https://www.educative.io/courses/grokking-the-coding-interview/YMzBx1gE5EO
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(1)
 */

/**
  Problem Statement#
  Given a string, find the length of the longest substring, which has all distinct characters.

  Example 1:
  Input: String="aabccbb"
  Output: 3
  Explanation: The longest substring with distinct characters is "abc".

  Example 2:
  Input: String="abbbb"
  Output: 2
  Explanation: The longest substring with distinct characters is "ab".

  Example 3:
  Input: String="abccde"
  Output: 3
  Explanation: Longest substrings with distinct characters are "abc" & "cde".
 */

const non_repeat_substring = function (str) {
    if (!str) return 0;

    let wStart = 0,
        wMap = {},
        mx = 0;

    for (let wEnd = 0; wEnd < str.length; wEnd++) {
        let wEndLtr = str[wEnd];

        if (!wMap[wEndLtr]) wMap[wEndLtr] = 1;
        else {
            wMap[wEndLtr]++;

            while (Object.keys(wMap).length) {
                let wStartLtr = str[wStart];

                if (wMap[wStartLtr] === 2) {
                    wMap[wStartLtr]--;
                    wStart++;
                    break;
                }

                delete wMap[wStartLtr];
                wStart++;
            }
        }

        mx = Math.max(mx, wEnd - wStart + 1);
    }

    return mx === 0 ? str.length : mx;
};

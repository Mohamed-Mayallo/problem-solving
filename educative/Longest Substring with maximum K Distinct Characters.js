/**
 * Longest Substring with maximum K Distinct Characters
 * Medium
 * https://www.educative.io/courses/grokking-the-coding-interview/YQQwQMWLx80
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(1)
 */

/**
  Problem Statement#
  Given a string, find the length of the longest substring in it with no more than K distinct characters.

  Example 1:
  Input: String="araaci", K=2
  Output: 4
  Explanation: The longest substring with no more than '2' distinct characters is "araa".

  Example 2:
  Input: String="araaci", K=1
  Output: 2
  Explanation: The longest substring with no more than '1' distinct characters is "aa".

  Example 3:
  Input: String="cbbebi", K=3
  Output: 5
  Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".

  Example 4:
  Input: String="cbbebi", K=10
  Output: 6
  Explanation: The longest substring with no more than '10' distinct characters is "cbbebi".
 */

const longest_substring_with_k_distinct = function (str, k) {
    let wStart = 0,
        wMap = {},
        wMapLen = 0,
        mx = 0;

    for (let wEnd = 0; wEnd < str.length; wEnd++) {
        let wEndLtr = str[wEnd];

        if (!wMap[wEndLtr]) {
            wMap[wEndLtr] = 1;
            wMapLen++;
        } else {
            wMap[wEndLtr]++;
        }

        while (wMapLen > k) {
            let wStartLtr = str[wStart];
            wMap[wStartLtr]--;

            if (wMap[wStartLtr] < 1) {
                delete wMap[wStartLtr];
                wMapLen--;
            }

            mx = Math.max(mx, wEnd - wStart);
            wStart++;
        }
    }

    return mx;
};

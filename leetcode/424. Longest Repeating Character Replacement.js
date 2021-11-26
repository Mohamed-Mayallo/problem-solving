/**
 * 424. Longest Repeating Character Replacement
 * Medium
 * https://leetcode.com/problems/longest-repeating-character-replacement/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(1)
 */

var characterReplacement = function (s, k) {
    let wStart = 0,
        wMaxCount = 0,
        mx = 0,
        map = {};

    for (let wEnd = 0; wEnd < s.length; wEnd++) {
        let wEndLtr = s[wEnd];

        if (!map[wEndLtr]) map[wEndLtr] = 1;
        else map[wEndLtr]++;

        wMaxCount = Math.max(wMaxCount, map[wEndLtr]);

        let wLen = wEnd - wStart + 1;
        if (wLen - wMaxCount > k) {
            let wStartLtr = s[wStart];
            map[wStartLtr]--;
            wStart++;
        }

        mx = Math.max(mx, wEnd - wStart + 1);
    }

    return mx;
};

/**
 * 3. Longest Substring Without Repeating Characters
 * Medium
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(1)
 */

var lengthOfLongestSubstring = function (s) {
    if (!s) return 0;

    let wStart = 0,
        wMap = {},
        mx = 0;

    for (let wEnd = 0; wEnd < s.length; wEnd++) {
        let wEndLtr = s[wEnd];

        if (!wMap[wEndLtr]) wMap[wEndLtr] = 1;
        else {
            wMap[wEndLtr]++;

            while (Object.keys(wMap).length) {
                let wStartLtr = s[wStart];

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

    return mx === 0 ? s.length : mx;
};

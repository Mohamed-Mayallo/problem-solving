/**
 * 386 · Longest Substring with At Most K Distinct Characters
 * Medium
 * https://www.lintcode.com/problem/386/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(1)
 */

export class Solution {
    /**
     * lengthOfLongestSubstringKDistinct
     *
     * @param s: A string
     * @param k: An integer
     * @return: An integer
     */
    lengthOfLongestSubstringKDistinct(s, k) {
        let wStart = 0,
            wMap = {},
            wMapLen = 0,
            mx = 0;

        for (let wEnd = 0; wEnd < s.length; wEnd++) {
            let wEndLtr = s[wEnd];

            if (!wMap[wEndLtr]) {
                wMap[wEndLtr] = 1;
                wMapLen++;
            } else {
                wMap[wEndLtr]++;
            }

            while (wMapLen > k) {
                let wStartLtr = s[wStart];
                wMap[wStartLtr]--;

                if (wMap[wStartLtr] < 1) {
                    delete wMap[wStartLtr];
                    wMapLen--;
                }

                wStart++;
            }

            mx = Math.max(mx, wEnd - wStart + 1);
        }

        return mx;
    }
}

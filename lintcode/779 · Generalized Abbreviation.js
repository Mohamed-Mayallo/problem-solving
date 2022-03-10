/**
 * 779 · Generalized Abbreviation
 * Medium
 * https://www.lintcode.com/problem/779/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N * 2^N)
 * Space complexity : O(N * 2^N)
 */

export class Solution {
    /**
     * @param word: the given word
     * @return: the generalized abbreviations of a word
     */
    generateAbbreviations(word) {
        let result = [""];
        for (let i = 0; i < word.length; i++) {
            let l = word[i];
            let len = result.length;
            let temp = [];
            for (let j = 0; j < len; j++) {
                let item = result[j];
                temp.push(...[item + "_", item + l]);
            }
            result = temp;
        }
        return result.map((r) => {
            if (!r.includes("_")) return r;
            return r
                .split("")
                .reduce((t, c) => {
                    if (c !== "_") t.push(c);
                    else if (!t.length && c === "_") t.push(1);
                    else {
                        if (+t[t.length - 1]) t[t.length - 1]++;
                        else t.push(1);
                    }
                    return t;
                }, [])
                .join("");
        });
    }
}

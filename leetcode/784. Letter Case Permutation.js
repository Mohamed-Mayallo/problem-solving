/**
 * 784. Letter Case Permutation
 * Medium
 * https://leetcode.com/problems/letter-case-permutation/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N * 2^N)
 * Space complexity : O(N * 2^N)
 */

var letterCasePermutation = function (str) {
    let map = {
        a: "A",
        b: "B",
        c: "C",
        d: "D",
        e: "E",
        f: "F",
        g: "G",
        h: "H",
        i: "I",
        j: "J",
        k: "K",
        l: "L",
        m: "M",
        n: "N",
        o: "O",
        p: "P",
        q: "Q",
        r: "R",
        s: "S",
        t: "T",
        u: "U",
        v: "V",
        w: "W",
        x: "X",
        y: "Y",
        z: "Z",
    };
    str = str.toLowerCase();
    let permutations = [];
    for (let s of str) {
        let temp = [];
        let isStr = !!map[s];
        if (isStr) {
            if (!permutations.length) {
                permutations.push(...[s, map[s]]);
            } else {
                for (let p of permutations) {
                    let sub = [p + s, p + map[s]];
                    temp.push(...sub);
                }
                permutations = temp;
            }
        } else {
            if (!permutations.length) {
                permutations.push(s);
            } else {
                permutations = permutations.map((p) => p + s);
            }
        }
    }
    return permutations;
};

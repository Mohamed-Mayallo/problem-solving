/**
 *  String Permutations by changing case
 *  Medium
 *  https://www.educative.io/courses/grokking-the-coding-interview/xVlKmyX542P
 */

/**
    Problem Statement

    Given a string, find all of its permutations preserving the character sequence but changing case.

    Example 1:
    Input: "ad52"
    Output: "ad52", "Ad52", "aD52", "AD52" 

    Example 2:
    Input: "ab7c"
    Output: "ab7c", "Ab7c", "aB7c", "AB7c", "ab7C", "Ab7C", "aB7C", "AB7C"
 */

/**
 *  First solution
 *  -----------------
 *  Time complexity  : O(N * 2^N)
 *  Space complexity : O(N * 2^N)
 */

const find_letter_case_string_permutations = function (str) {
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
        A: "a",
        B: "b",
        C: "c",
        D: "d",
        E: "e",
        F: "f",
        G: "g",
        H: "h",
        I: "i",
        J: "j",
        K: "k",
        L: "l",
        M: "m",
        N: "n",
        O: "o",
        P: "p",
        Q: "q",
        R: "r",
        S: "s",
        T: "t",
        U: "u",
        V: "v",
        W: "w",
        X: "x",
        Y: "y",
        Z: "z",
    };
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
                permutations.push(...[s, s]);
            } else {
                permutations = permutations.map((p) => p + s);
            }
        }
    }
    return permutations;
};

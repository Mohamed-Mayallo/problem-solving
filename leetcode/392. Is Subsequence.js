/**
 * 392. Is Subsequence
 * Easy
 * https://leetcode.com/problems/is-subsequence/
 */

/**
 * Time complexity  : O(N)
 * Space complexity : O(1)
 */

var isSubsequence = function(s, t) {
    let i = 0,
        j = 0,
        isMatched = false
    if (!s) return true
    while (i < s.length && j < t.length) {
        let iS = s[i],
            jT = t[j]
        if (iS === jT) {
            i++
            isMatched = true
        }
        else isMatched = false
        j++
    }
    isMatched = isMatched && i >= s.length
    return isMatched
};
isSubsequence("acb","ahbgdc")


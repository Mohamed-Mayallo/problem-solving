/**
 * 438. Find All Anagrams in a String
 * Medium
 * https://leetcode.com/problems/find-all-anagrams-in-a-string/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(N)
 */

var findAnagrams = function (str, pattern) {
    let result_indexes = [],
        start = 0,
        map = {},
        matched = 0;
    for (let i = 0; i < pattern.length; i++) {
        if (!(pattern[i] in map)) {
            map[pattern[i]] = 0;
        }
        map[pattern[i]]++;
    }
    for (let end = 0; end < str.length; end++) {
        if (str[end] in map) {
            map[str[end]]--;
            if (map[str[end]] === 0) {
                matched++;
            }
        }
        if (matched === Object.keys(map).length) {
            result_indexes.push(start);
        }
        if (end >= pattern.length - 1) {
            if (str[start] in map) {
                if (map[str[start]] === 0) {
                    matched--;
                }
                map[str[start]]++;
            }
            start++;
        }
    }
    return result_indexes;
};

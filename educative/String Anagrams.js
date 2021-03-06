/**
 * String Anagrams
 * Hard
 * https://www.educative.io/courses/grokking-the-coding-interview/YQ8N2OZq0VM
 */

/**
    Problem Statement

    Given a string and a pattern, find all anagrams of the pattern in the given string.

    Every anagram is a permutation of a string. As we know, when we are not allowed to repeat characters while finding permutations of a string, we get N!
    permutations (or anagrams) of a string having N characters. For example, here are the six anagrams of the string “abc”:
    abc
    acb
    bac
    bca
    cab
    cba

    Write a function to return a list of starting indices of the anagrams of the pattern in the given string.

    Example 1:
    Input: String="ppqp", Pattern="pq"
    Output: [1, 2]
    Explanation: The two anagrams of the pattern in the given string are "pq" and "qp".

    Example 2:
    Input: String="abbcabc", Pattern="abc"
    Output: [2, 3, 4]
    Explanation: The three anagrams of the pattern in the given string are "bca", "cab", and "abc".
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(N)
 */

const find_string_anagrams = function (str, pattern) {
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

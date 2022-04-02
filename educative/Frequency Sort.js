/**
 * Frequency Sort
 * Medium
 * https://www.educative.io/courses/grokking-the-coding-interview/gxZz615BPPG
 */

/**
  Problem Statement

  Given a string, sort it based on the decreasing frequency of its characters.

  Example 1:
  Input: "Programming"
  Output: "rrggmmPiano"
  Explanation: 'r', 'g', and 'm' appeared twice, so they need to appear before any other character.

  Example 2:
  Input: "abcbab"
  Output: "bbbaac"
  Explanation: 'b' appeared three times, 'a' appeared twice, and 'c' appeared only once.
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N Log(N))
 * Space complexity : O(N)
 */

const sort_character_by_frequency = function (str) {
  const map = {};
  const maxHeap = [];
  for (const s of str) {
    if (s in map) map[s]++;
    else map[s] = 1;
  }
  for (const s in map) {
    maxHeap.push({ value: s, frq: map[s] });
    maxHeap.sort((a, b) => b.frq - a.frq);
  }
  return maxHeap.map((v) => v.value.repeat(v.frq)).join('');
};

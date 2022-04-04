/**
 * Rearrange String
 * Hard
 * https://www.educative.io/courses/grokking-the-coding-interview/xV7wx4o8ymB
 */

/**
  Problem Statement

  Given a string, find if its letters can be rearranged in such a way that no two same characters come next to each other.

  Example 1:
  Input: "aappp"
  Output: "papap"
  Explanation: In "papap", none of the repeating characters come next to each other.

  Example 2:
  Input: "Programming"
  Output: "rgmrgmPiano" or "gmringmrPoa" or "gmrPagimnor", etc.
  Explanation: None of the repeating characters come next to each other.

  Example 3:
  Input: "aapa"
  Output: ""
  Explanation: In all arrangements of "aapa", atleast two 'a' will come together e.g., "apaa", "paaa".
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N Log(N))
 * Space complexity : O(N)
 */

const rearrange_string = function (str) {
  const map = {};
  for (const s of str) {
    if (s in map) map[s]++;
    else map[s] = 1;
  }
  const maxHeap = [];
  for (const k in map) {
    maxHeap.push({ s: k, f: map[k] });
    maxHeap.sort((a, b) => b.f - a.f);
  }
  let prev = null,
    result = '';
  while (maxHeap.length) {
    const { s, f } = maxHeap.shift();
    if (prev && prev.f > 0) {
      maxHeap.push({ s: prev.s, f: prev.f });
      maxHeap.sort((a, b) => b.f - a.f);
    }
    result += s;
    prev = { s, f: f - 1 };
  }
  if (result.length === str.length) return result;
  return '';
};

/**
 * 767. Reorganize String
 * Medium
 * https://leetcode.com/problems/reorganize-string/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N Log(N))
 * Space complexity : O(N)
 */

var reorganizeString = function (str) {
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

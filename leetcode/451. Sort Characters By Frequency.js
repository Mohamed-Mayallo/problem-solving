/**
 * 451. Sort Characters By Frequency
 * Medium
 * https://leetcode.com/problems/sort-characters-by-frequency/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N Log(N))
 * Space complexity : O(N)
 */

var frequencySort = function (str) {
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

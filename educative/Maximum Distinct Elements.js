/**
 * Maximum Distinct Elements
 * Medium
 * https://www.educative.io/courses/grokking-the-coding-interview/gx6oKY8PGYY
 */

/**
  Problem Statement

  Given an array of numbers and a number ‘K’, we need to remove ‘K’ numbers from the array such that we are left with maximum distinct numbers.

  Example 1:
  Input: [7, 3, 5, 8, 5, 3, 3], and K=2
  Output: 3
  Explanation: We can remove two occurrences of 3 to be left with 3 distinct numbers [7, 3, 8], we have to skip 5 because it is not distinct and appeared twice. 
  Another solution could be to remove one instance of '5' and '3' each to be left with three distinct numbers [7, 5, 8], in this case, we have to skip 3 because it appeared twice.

  Example 2:
  Input: [3, 5, 12, 11, 12], and K=3
  Output: 2
  Explanation: We can remove one occurrence of 12, after which all numbers will become distinct. Then we can delete any two numbers which will leave us 2 distinct numbers in the result.

  Example 3:
  Input: [1, 2, 3, 3, 3, 3, 4, 4, 5, 5, 5], and K=2
  Output: 3
  Explanation: We can remove one occurrence of '4' to get three distinct numbers.
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N Log(K))
 * Space complexity : O(N)
 */

const find_maximum_distinct_elements = function (nums, k) {
  const map = {};
  for (const n of nums) {
    if (n in map) map[n]++;
    else map[n] = 1;
  }
  const minHeap = [];
  let occ = 0;
  for (const key in map) {
    if (map[key] === 1) occ++;
    const peek = minHeap[0];
    if (minHeap.length < k && map[key] > 1) {
      minHeap.push({ n: key, freq: map[key] });
      if (minHeap.length === k) minHeap.sort((a, b) => a.freq - b.freq);
    } else if (peek && map[key] < peek.freq && map[key] > 1) {
      minHeap.shift();
      minHeap.push({ n: key, freq: map[key] });
      minHeap.sort((a, b) => a.freq - b.freq);
    }
  }
  for (const i of minHeap) {
    const newK = k - i.freq + 1;
    k = newK;
    if (k >= 0) occ++;
    else break;
  }
  if (k > 0) {
    occ -= k;
  }
  return occ;
};

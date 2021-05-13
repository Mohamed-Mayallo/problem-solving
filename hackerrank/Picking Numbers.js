/**
 * Picking Numbers
 * Easy
 * https://www.hackerrank.com/challenges/picking-numbers/problem
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(1)
 */

function pickingNumbers(a) {
  if (!a.length) return 0;
  if (a.length === 1) return 1;

  let sortedA = a.sort();

  let maxLength = 0;
  let repetitiveNums = 1;
  for (
    let startWindow = 0, endWindow = 1;
    endWindow < sortedA.length;
    endWindow++
  ) {
    let end = sortedA[endWindow],
      prevEnd = sortedA[endWindow - 1];

    if (Math.abs(end - prevEnd) <= 1 && repetitiveNums <= 2) {
      if (end != prevEnd) repetitiveNums++;
      if (repetitiveNums <= 2) {
        maxLength = Math.max(maxLength, endWindow - startWindow + 1);
      } else {
        startWindow = endWindow;
        repetitiveNums = 1;
      }
    } else {
      startWindow = endWindow;
      repetitiveNums = 1;
    }
  }
  return maxLength;
}

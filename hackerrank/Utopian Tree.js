/**
 * Utopian Tree
 * Easy
 * https://www.hackerrank.com/challenges/utopian-tree/problem
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(1)
 */

function utopianTree(n) {
  if (n === 0) return 1;
  let tall = 1;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      tall += 1;
    } else {
      tall *= 2;
    }
  }
  return tall;
}

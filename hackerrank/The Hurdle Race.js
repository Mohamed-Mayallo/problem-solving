/**
 * The Hurdle Race
 * Easy
 * https://www.hackerrank.com/challenges/the-hurdle-race/problem
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(Nlog(N))
 * Space complexity : O(N)
 */

function hurdleRace(k, height) {
  let highestHurdle = height.sort((a, b) => b - a)[0];
  if (k >= highestHurdle) return 0;
  return highestHurdle - k;
}

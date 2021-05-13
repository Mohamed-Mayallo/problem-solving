/**
 * Jumping on the Clouds
 * Easy
 * https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(1)
 */

function jumpingOnClouds(c) {
  let steps = 0;
  for (let i = 0, first = 1, second = 2; i < c.length; ) {
    if (c[second] === 0) {
      steps++;
      i = second;
      second = i + 2;
      first = i + 1;
    } else if (c[first] === 0) {
      steps++;
      i = first;
      first = i + 1;
      second = i + 2;
    } else {
      i++;
      first++;
      second++;
    }
  }
  return steps;
}

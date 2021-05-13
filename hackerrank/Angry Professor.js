/**
 * Angry Professor
 * Easy
 * https://www.hackerrank.com/challenges/angry-professor/problem
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(1)
 */

function angryProfessor(k, a) {
  let attendees = a.filter((n) => n <= 0).length;
  return attendees >= k ? "NO" : "YES";
}

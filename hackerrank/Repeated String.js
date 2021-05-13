/**
 * Repeated String
 * Easy
 * https://www.hackerrank.com/challenges/repeated-string/problem
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(1)
 */

function repeatedString(s, n) {
  if (s.indexOf("a") === -1) return 0;
  if (s.length === 1) {
    if (s === "a") return n;
    else return 0;
  }
  let indexes = s.split("").filter((a) => a === "a").length;
  let maxReal = Math.floor(n / s.length) * s.length,
    remain = n - maxReal;

  return (
    (maxReal / s.length) * indexes +
    s
      .slice(0, remain)
      .split("")
      .filter((a) => a === "a").length
  );
}

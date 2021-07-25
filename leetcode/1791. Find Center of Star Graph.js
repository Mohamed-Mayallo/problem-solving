/**
 * 1791. Find Center of Star Graph
 * Easy
 * https://leetcode.com/problems/find-center-of-star-graph/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(N)
 */

var findCenter = function (edges) {
  let map = {};
  for (e of edges) {
    if (map[e[0]]) map[e[0]]++;
    else map[e[0]] = 1;

    if (map[e[1]]) map[e[1]]++;
    else map[e[1]] = 1;
  }

  let common = null;
  for (e in map) {
    if (!common || map[common] < map[e]) {
      common = e;
    }
  }

  return common;
};

/**
 * 406. Queue Reconstruction by Height
 * Medium
 * https://leetcode.com/problems/queue-reconstruction-by-height/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(NLong(N) + N^2)
 * Space complexity : O(N)
 */

var reconstructQueue = function (people) {
  people.sort((a, b) => a[0] - b[0]);
  let newQ = [];
  for (let i = 0; i < people.length; i++) {
    let p = people[i];
    let rank = p[1];
    for (let j = 0; j < people.length; j++) {
      if (!newQ[j] && rank === 0) {
        newQ[j] = p;
        break;
      }
      if (!newQ[j] || newQ[j][0] >= p[0]) rank--;
    }
  }
  return newQ;
};

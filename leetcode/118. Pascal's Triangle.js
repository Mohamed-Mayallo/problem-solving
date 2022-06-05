/**
 * 118. Pascal's Triangle
 * Easy
 * https://leetcode.com/problems/pascals-triangle/submissions/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N ^ 2)
 * Space complexity : O(N ^ 2)
 */

var generate = function (numRows) {
  if (numRows === 1) return [[1]];
  let res = [[1]];
  for (let i = 1; i < numRows; i++) {
    let prevRow = res[i - 1],
      innerRow = [];
    for (let j = 0; j <= prevRow.length; j++) {
      let prevAtJ = prevRow[j],
        prevAtJMinusOne = prevRow[j - 1],
        sum = (prevAtJ || 0) + (prevAtJMinusOne || 0);
      innerRow.push(sum);
    }
    res.push(innerRow);
  }
  return res;
};

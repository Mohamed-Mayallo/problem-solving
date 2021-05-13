/**
 * Designer PDF Viewer
 * Easy
 * https://www.hackerrank.com/challenges/designer-pdf-viewer/problem
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(1)
 */

function designerPdfViewer(h, word) {
  let letters = "abcdefghijklmnopqrstuvwxyz";
  let map = letters.split("").reduce((tot, lett, i) => {
    tot[lett] = h[i];
    return tot;
  }, {});
  let max = 1;
  for (let i of word.trim().split("")) {
    max = Math.max(max, map[i]);
  }
  return max * word.length;
}

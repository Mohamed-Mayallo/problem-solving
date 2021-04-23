/**
 * 100. Same Tree
 * Easy
 * https://leetcode.com/problems/same-tree/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(N)
 */

var recursive = function (node, otherNode) {
  if (!node && !otherNode) return true;
  if ((node && !otherNode) || (otherNode && !node)) return false;
  if (
    node.val === otherNode.val &&
    recursive(node.left, otherNode.left) &&
    recursive(node.right, otherNode.right)
  )
    return true;
  return false;
};

var isSameTree = function (p, q) {
  if (!p && !q) return true;
  if ((!p && q) || (p && !q)) return false;
  return recursive(p, q);
};

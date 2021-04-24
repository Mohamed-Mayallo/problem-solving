/**
 * 98. Validate Binary Search Tree
 * Medium
 * https://leetcode.com/problems/validate-binary-search-tree/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(N)
 */

var isValidTraversal = function (node, min, max) {
  if (!node) return true;
  if (
    node.val < max &&
    node.val > min &&
    isValidTraversal(node.left, min, node.val) &&
    isValidTraversal(node.right, node.val, max)
  )
    return true;

  return false;
};

var isValidBST = function (root) {
  return isValidTraversal(root, -Infinity, Infinity);
};

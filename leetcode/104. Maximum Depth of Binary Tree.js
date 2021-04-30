/**
 * 104. Maximum Depth of Binary Tree
 * Easy
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(N)
 */

function traverse(node, depth) {
  if (!node) return depth;
  return Math.max(
    traverse(node.left, depth + 1),
    traverse(node.right, depth + 1)
  );
}

var maxDepth = function (root) {
  return traverse(root, 0);
};

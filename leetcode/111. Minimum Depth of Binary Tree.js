/**
 * 111. Minimum Depth of Binary Tree
 * Easy
 * https://leetcode.com/problems/minimum-depth-of-binary-tree/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(N)
 */

function traverse(node, depth) {
  if (node && !node.left && !node.right) return depth;
  if (!node) return Infinity;
  return Math.min(
    traverse(node.left, depth + 1),
    traverse(node.right, depth + 1)
  );
}

var minDepth = function (root) {
  if (!root) return 0;
  return traverse(root, 1);
};

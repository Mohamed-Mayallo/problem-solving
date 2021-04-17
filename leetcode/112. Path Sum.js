/**
 * 112. Path Sum
 * Easy
 * https://leetcode.com/problems/path-sum/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(N)
 */

var hasPathSum = function (root, targetSum) {
  let hasTarget = false;

  function traverse(node, currentSum) {
    if (!node || hasTarget) return;

    currentSum += node.val;

    traverse(node.left, currentSum);
    traverse(node.right, currentSum);

    if (!node.left && !node.right && currentSum === targetSum) hasTarget = true;
  }

  traverse(root, 0);
  return hasTarget;
};

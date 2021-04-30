/**
 * 257. Binary Tree Paths
 * Easy
 * https://leetcode.com/problems/binary-tree-paths/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(N)
 */

function traverse(node, str, res) {
  if (!node) return res;

  if (node && !node.left && !node.right) {
    str += `${node.val}`;
    res.push(str);
    str = "";
    return res;
  }

  str += `${node.val}->`;

  traverse(node.left, str, res);
  traverse(node.right, str, res);

  return res;
}

var binaryTreePaths = function (root) {
  return traverse(root, "", []);
};

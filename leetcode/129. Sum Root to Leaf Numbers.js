/**
 * 129. Sum Root to Leaf Numbers
 * Medium
 * https://leetcode.com/problems/sum-root-to-leaf-numbers/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(N)
 */

var traverse = function (node, path) {
    if (!node) return 0;
    if (!node.left && !node.right) return +`${path}${node.val}`;
    return traverse(node.left, +`${path}${node.val}`) + traverse(node.right, +`${path}${node.val}`);
};

var sumNumbers = function (root) {
    return traverse(root, '');
};

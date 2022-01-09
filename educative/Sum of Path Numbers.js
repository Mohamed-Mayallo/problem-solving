/**
 * Sum of Path Numbers
 * Medium
 * https://www.educative.io/courses/grokking-the-coding-interview/YQ5o5vEXP69
 */

/**
  Problem Statement

  Given a binary tree where each node can only have a digit (0-9) value, each root-to-leaf path will represent a number. Find the total sum of all the numbers represented by all paths.
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(N)
 */

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const traverse = function (node, path) {
    if (!node) return 0;
    if (!node.left && !node.right) return +`${path}${node.value}`;
    return (
        traverse(node.left, +`${path}${node.value}`) + traverse(node.right, +`${path}${node.value}`)
    );
};

const find_sum_of_path_numbers = function (root) {
    return traverse(root, '');
};

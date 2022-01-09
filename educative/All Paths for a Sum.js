/**
 * All Paths for a Sum
 * Medium
 * https://www.educative.io/courses/grokking-the-coding-interview/B815A0y2Ajn
 */

/**
  Problem Statement

  Given a binary tree and a number ‘S’, find all paths from root-to-leaf such that the sum of all the node values of each path equals ‘S’.
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(Nlog(N))   Tricky!
 * Space complexity : O(Nlog(N))   Tricky!
 */

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const traverse = function (node, sum, paths) {
    if (!node) return [];
    if (!node.left && !node.right && sum === node.value) return [[...paths, node.value]];
    return [
        ...traverse(node.left, sum - node.value, [...paths, node.value]),
        ...traverse(node.right, sum - node.value, [...paths, node.value])
    ];
};

const find_paths = function (root, sum) {
    return traverse(root, sum, []);
};

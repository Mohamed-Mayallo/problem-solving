/**
 * Count Paths for a Sum
 * Medium
 * https://www.educative.io/courses/grokking-the-coding-interview/xV2J7jvN1or
 */

/**
  Problem Statement

  Given a binary tree and a number ‘S’, find all paths in the tree such that the sum of all the node values of each path equals ‘S’. Please note that the paths can start or end at any node but all paths must follow direction from parent to child (top to bottom).
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N^2)
 * Space complexity : O(N)
 */

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const traverse = function (node, S, path) {
    if (!node) return 0;
    path.push(node.value);
    let sum = 0;
    let count = 0;
    for (let i = path.length - 1; i >= 0; i--) {
        sum += path[i];
        if (sum === S) count++;
    }
    count += traverse(node.left, S, path);
    count += traverse(node.right, S, path);
    path.pop();
    return count;
};

const count_paths = function (root, S) {
    return traverse(root, S, []);
};

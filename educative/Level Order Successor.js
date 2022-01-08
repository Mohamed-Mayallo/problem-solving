/**
 * Level Order Successor
 * Easy
 * https://www.educative.io/courses/grokking-the-coding-interview/7nO4VmA74Lr
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(N)
 */

/**
  Problem Statement

  Given a binary tree and a node, find the level order successor of the given node in the tree. The level order successor is the node that appears right after the given node in the level order traversal.
 */

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const find_successor = function (root, key) {
    if (!root) return null;
    let queue = [root];
    let visited = new Set();
    let isKeyVisited = false;
    while (queue.length) {
        let node = queue.shift();
        if (!visited.has(node)) {
            if (isKeyVisited) return node;
            if (node.val === key) isKeyVisited = true;
            visited.add(node);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    return null;
};

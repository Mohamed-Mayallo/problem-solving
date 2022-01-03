/**
 * Reverse Level Order Traversal
 * Easy
 * https://www.educative.io/courses/grokking-the-coding-interview/m2N6GwARL8r
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(N)
 */

/**
  Problem Statement

  Given a binary tree, populate an array to represent its level-by-level traversal in reverse order, i.e., the lowest level comes first. You should populate the values of all nodes in each level from left to right in separate sub-arrays.
 */

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const traverse = function (root) {
    let result = [];
    if (!root) return result;
    let queue = [[root]];
    let visited = new Set();
    while (queue.length) {
        let level = queue.shift();
        let resLevel = [];
        let queueLevel = [];
        for (let i = 0; i < level.length; i++) {
            let node = level[i];
            if (!visited.has(node)) {
                visited.add(node);
                resLevel.push(node.value);
                if (node.left) queueLevel.push(node.left);
                if (node.right) queueLevel.push(node.right);
            }
        }
        if (queueLevel.length) queue.unshift(queueLevel);
        if (resLevel.length) result.unshift(resLevel);
        resLevel = [];
    }
    return result;
};

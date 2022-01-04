/**
 * Minimum Depth of a Binary Tree
 * Easy
 * https://www.educative.io/courses/grokking-the-coding-interview/3jwVx84OMkO
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(N)
 */

/**
  Problem Statement

  Find the minimum depth of a binary tree. The minimum depth is the number of nodes along the shortest path from the root node to the nearest leaf node.
 */

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const find_minimum_depth = function (root) {
    if (!root) return 0;
    let queue = [[root]];
    let visited = new Set();
    let min = 1;
    while (queue.length) {
        let level = queue.shift();
        let levelChildren = [];
        for (let i = 0; i < level.length; i++) {
            let node = level[i];
            if (!visited.has(node)) {
                visited.add(node);
                if (node.left) levelChildren.push(node.left);
                if (node.right) levelChildren.push(node.right);
                if (!node.left && !node.right) return min;
            }
        }
        min++;
        if (levelChildren.length) queue.push(levelChildren);
    }
    return min;
};

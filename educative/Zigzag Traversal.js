/**
 * Zigzag Traversal
 * Medium
 * https://www.educative.io/courses/grokking-the-coding-interview/qVA27MMYYn0
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(N)
 */

/**
  Problem Statement

  Given a binary tree, populate an array to represent its zigzag level order traversal. You should populate the values of all nodes of the first level from left to right, then right to left for the next level and keep alternating in the same manner for the following levels.
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
    let left = true;
    while (queue.length) {
        let level = queue.shift();
        let res = [];
        let levelChildren = [];
        for (let i = 0; i < level.length; i++) {
            let node = level[i];
            if (!visited.has(node)) {
                visited.add(node);
                if (left) res.push(node.value);
                else res.unshift(node.value);
                if (node.left) levelChildren.push(node.left);
                if (node.right) levelChildren.push(node.right);
            }
        }
        if (levelChildren.length) queue.push(levelChildren);
        if (res.length) result.push(res);
        left = !left;
    }
    return result;
};

/**
 * Level Averages in a Binary Tree
 * Easy
 * https://www.educative.io/courses/grokking-the-coding-interview/YQWkA2l67GW
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(N)
 */

/**
  Problem Statement

  Given a binary tree, populate an array to represent the averages of all of its levels.
 */

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const find_level_averages = function (root) {
    let result = [];
    if (!root) return result;
    let queue = [[root]];
    let visited = new Set();
    while (queue.length) {
        let level = queue.shift();
        let length = level.length;
        let resSum = 0;
        let levelChildren = [];
        for (let i = 0; i < length; i++) {
            let node = level[i];
            if (!visited.has(node)) {
                visited.add(node);
                resSum += node.value;
                if (node.left) levelChildren.push(node.left);
                if (node.right) levelChildren.push(node.right);
            }
        }
        if (levelChildren.length) queue.push(levelChildren);
        result.push(resSum / length);
    }
    return result;
};

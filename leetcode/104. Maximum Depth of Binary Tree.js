/**
 * 104. Maximum Depth of Binary Tree
 * Easy
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(N)
 */

function traverse(node, depth) {
    if (!node) return depth;
    return Math.max(traverse(node.left, depth + 1), traverse(node.right, depth + 1));
}

var maxDepth = function (root) {
    return traverse(root, 0);
};

/**
 * Second solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(N)
 */

var maxDepth = function (root) {
    if (!root) return 0;
    let queue = [[root]];
    let visited = new Set();
    let max = 0;
    while (queue.length) {
        let level = queue.shift();
        let levelChildren = [];
        max++;
        for (let i = 0; i < level.length; i++) {
            let node = level[i];
            if (!visited.has(node)) {
                visited.add(node);
                if (node.left) levelChildren.push(node.left);
                if (node.right) levelChildren.push(node.right);
            }
        }
        if (levelChildren.length) queue.push(levelChildren);
    }
    return max;
};

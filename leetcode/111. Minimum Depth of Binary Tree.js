/**
 * 111. Minimum Depth of Binary Tree
 * Easy
 * https://leetcode.com/problems/minimum-depth-of-binary-tree/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(N)
 */

function traverse(node, depth) {
    if (node && !node.left && !node.right) return depth;
    if (!node) return Infinity;
    return Math.min(traverse(node.left, depth + 1), traverse(node.right, depth + 1));
}

var minDepth = function (root) {
    if (!root) return 0;
    return traverse(root, 1);
};

/**
 * Second solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(N)
 */

var minDepth = function (root) {
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

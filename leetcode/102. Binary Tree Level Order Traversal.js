/**
 * 102. Binary Tree Level Order Traversal
 * Medium
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(N)
 */

var levelOrder = function (root) {
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
                resLevel.push(node.val);
                if (node.left) queueLevel.push(node.left);
                if (node.right) queueLevel.push(node.right);
            }
        }
        if (queueLevel.length) queue.push(queueLevel);
        if (resLevel.length) result.push(resLevel);
        resLevel = [];
    }
    return result;
};

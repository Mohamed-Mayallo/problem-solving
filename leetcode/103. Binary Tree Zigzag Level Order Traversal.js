/**
 * 103. Binary Tree Zigzag Level Order Traversal
 * Medium
 * https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(N)
 */

var zigzagLevelOrder = function (root) {
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
                if (left) res.push(node.val);
                else res.unshift(node.val);
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

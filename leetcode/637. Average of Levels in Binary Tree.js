/**
 * 637. Average of Levels in Binary Tree
 * Easy
 * https://leetcode.com/problems/average-of-levels-in-binary-tree/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(N)
 */

var averageOfLevels = function (root) {
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
                resSum += node.val;
                if (node.left) levelChildren.push(node.left);
                if (node.right) levelChildren.push(node.right);
            }
        }
        if (levelChildren.length) queue.push(levelChildren);
        result.push(resSum / length);
    }
    return result;
};

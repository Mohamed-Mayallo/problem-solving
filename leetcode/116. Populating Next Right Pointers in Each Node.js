/**
 * 116. Populating Next Right Pointers in Each Node
 * Medium
 * https://leetcode.com/problems/populating-next-right-pointers-in-each-node/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(N)
 */

var connect = function (root) {
    if (!root) return null;
    let queue = [[root]];
    let visited = new Set();
    let prevNode = null;
    while (queue.length) {
        let level = queue.shift();
        let nextLevel = [];
        for (let i = 0; i < level.length; i++) {
            let node = level[i];
            if (!visited.has(node)) {
                visited.add(node);
                if (prevNode) prevNode.next = node;
                prevNode = node;
                if (node.left) nextLevel.push(node.left);
                if (node.right) nextLevel.push(node.right);
            }
        }
        if (nextLevel.length) queue.push(nextLevel);
        prevNode = null;
        nextLevel = [];
    }
    return root;
};

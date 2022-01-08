/**
 * Connect Level Order Siblings
 * Medium
 * https://www.educative.io/courses/grokking-the-coding-interview/m2YYxXDOJ03
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(N)
 */

/**
  Problem Statement

  Given a binary tree, connect each node with its level order successor. The last node of each level should point to a null node.
 */

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.next = null;
    }

    // level order traversal using 'next' pointer
    print_level_order() {
        console.log("Level order traversal using 'next' pointer: ");
        let nextLevelRoot = this;
        while (nextLevelRoot !== null) {
            let current = nextLevelRoot;
            nextLevelRoot = null;
            while (current != null) {
                process.stdout.write(`${current.val} `);
                if (nextLevelRoot === null) {
                    if (current.left !== null) {
                        nextLevelRoot = current.left;
                    } else if (current.right !== null) {
                        nextLevelRoot = current.right;
                    }
                }
                current = current.next;
            }
            console.log();
        }
    }
}

const connect_level_order_siblings = function (root) {
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

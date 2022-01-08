/**
 * Binary Tree Path Sum
 * Easy
 * https://www.educative.io/courses/grokking-the-coding-interview/RMlGwgpoKKY
 */

/**
  Problem Statement

  Given a binary tree and a number ‘S’, find if the tree has a path from root-to-leaf such that the sum of all the node values of that path equals ‘S’.
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(N)
 */

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const has_path = function (root, sum) {
    if (!root) return false;
    let stack = [root];
    let valuesStack = [root.value];
    while (stack.length) {
        let node = stack.pop();
        let pathSum = valuesStack.pop();
        if (!node.right && !node.left && pathSum === sum) return true;
        if (node.right) {
            stack.push(node.right);
            valuesStack.push(node.right.value + pathSum);
        }
        if (node.left) {
            stack.push(node.left);
            valuesStack.push(node.left.value + pathSum);
        }
    }
    return false;
};

/**
 * Second solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(N)
 */

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const has_path = function (root, sum) {
    if (!root) return false;
    if (sum - root.value === 0 && !root.right && !root.left) return true;
    return has_path(root.left, sum - root.value) || has_path(root.right, sum - root.value);
};

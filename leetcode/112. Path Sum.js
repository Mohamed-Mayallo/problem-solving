/**
 * 112. Path Sum
 * Easy
 * https://leetcode.com/problems/path-sum/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(N)
 */

var hasPathSum = function (root, targetSum) {
    let hasTarget = false;

    function traverse(node, currentSum) {
        if (!node || hasTarget) return;

        currentSum += node.val;

        traverse(node.left, currentSum);
        traverse(node.right, currentSum);

        if (!node.left && !node.right && currentSum === targetSum) hasTarget = true;
    }

    traverse(root, 0);
    return hasTarget;
};

/**
 * Second solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(N)
 */

var hasPathSum = function (root, targetSum) {
    if (!root) return false;
    let stack = [root];
    let valuesStack = [root.val];
    while (stack.length) {
        let node = stack.pop();
        let pathSum = valuesStack.pop();
        if (!node.right && !node.left && pathSum === targetSum) return true;
        if (node.right) {
            stack.push(node.right);
            valuesStack.push(node.right.val + pathSum);
        }
        if (node.left) {
            stack.push(node.left);
            valuesStack.push(node.left.val + pathSum);
        }
    }
    return false;
};

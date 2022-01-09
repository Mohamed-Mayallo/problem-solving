/**
 * 437. Path Sum III
 * Medium
 * https://leetcode.com/problems/path-sum-iii/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N^2)
 * Space complexity : O(N)
 */

const traverse = function (node, S, path) {
    if (!node) return 0;
    path.push(node.val);
    let sum = 0;
    let count = 0;
    for (let i = path.length - 1; i >= 0; i--) {
        sum += path[i];
        if (sum === S) count++;
    }
    count += traverse(node.left, S, path);
    count += traverse(node.right, S, path);
    path.pop();
    return count;
};

var pathSum = function (root, targetSum) {
    return traverse(root, targetSum, []);
};

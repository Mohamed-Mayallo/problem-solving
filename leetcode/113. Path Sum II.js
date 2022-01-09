/**
 * 113. Path Sum II
 * Medium
 * https://leetcode.com/problems/path-sum-ii/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(Nlog(N))   Tricky!
 * Space complexity : O(Nlog(N))   Tricky!
 */

var traverse = function (node, sum, paths) {
    if (!node) return [];
    if (!node.left && !node.right && sum === node.val) return [[...paths, node.val]];
    return [
        ...traverse(node.left, sum - node.val, [...paths, node.val]),
        ...traverse(node.right, sum - node.val, [...paths, node.val])
    ];
};

var pathSum = function (root, targetSum) {
    return traverse(root, targetSum, []);
};

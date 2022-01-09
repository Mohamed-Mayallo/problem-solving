/**
 * Path With Given Sequence
 * Medium
 * https://www.educative.io/courses/grokking-the-coding-interview/m280XNlPOkn
 */

/**
  Problem Statement

  Given a binary tree and a number sequence, find if the sequence is present as a root-to-leaf path in the given tree.
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

const find_path = function (root, sequence) {
    if (!root) return false;
    if (root.value === sequence[0]) sequence.shift();
    if (!root.left && !root.right && !sequence.length) return true;
    return find_path(root.left, sequence) || find_path(root.right, sequence);
};

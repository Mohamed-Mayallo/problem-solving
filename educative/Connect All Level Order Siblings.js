/**
 * Connect All Level Order Siblings
 * Medium
 * https://www.educative.io/courses/grokking-the-coding-interview/NE5109Jl02v
 */

/**
  Problem Statement

  Given a binary tree, connect each node with its level order successor. The last node of each level should point to the first node of the next level.
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

  // tree traversal using 'next' pointer
  print_tree() {
    result = "Traversal using 'next' pointer: ";
    current = this;
    while (current != null) {
      result += current.value + ' ';
      current = current.next;
    }
    console.log(result);
  }
}

const connect_all_siblings = function (root) {
  let queue = [root],
    prev = null;
  while (queue.length) {
    let current = queue.shift();
    if (prev) prev.next = current;
    prev = current;
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return root;
};

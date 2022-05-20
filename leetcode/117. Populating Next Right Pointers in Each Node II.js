/**
 * 117. Populating Next Right Pointers in Each Node II
 * Medium
 * https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(N)
 */

var connect = function (root) {
  if (!root) return null;
  let queue = [root];
  while (queue.length) {
    let level = [],
      levelLength = queue.length;
    for (let i = 0; i < levelLength; i++) {
      let node = queue.shift();
      level.push(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    for (let i = 0; i < levelLength; i++) {
      level[i].next = level[i + 1] || null;
    }
  }
  return root;
};

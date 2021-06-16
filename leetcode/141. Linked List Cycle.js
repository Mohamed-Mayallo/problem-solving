/**
 * 141. Linked List Cycle
 * Easy
 * https://leetcode.com/problems/linked-list-cycle/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(N)
 */

var hasCycle = function (head) {
  let currentNode = head,
    map = new Map();
  while (currentNode) {
    let found = map.get(currentNode);
    if (found) return true;
    map.set(currentNode, true);
    currentNode = currentNode.next;
  }
  return false;
};

/**
 * Insert a node at a specific position in a linked list
 * Easy
 * https://www.hackerrank.com/challenges/insert-a-node-at-a-specific-position-in-a-linked-list/problem
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(1)
 */

function insertNodeAtPosition(llist, data, position) {
  if (!llist) return null;
  let node = { data, next: null };
  if (position === 0) return { data, next: llist };
  let currentNode = llist;
  let counter = 0;
  while (currentNode) {
    let next = currentNode.next;
    if (counter === position - 1) {
      currentNode.next = node;
      node.next = next;
      return llist;
    }
    currentNode = currentNode.next;
    counter++;
  }
  currentNode.next = node;
  node.next = null;
  return llist;
}

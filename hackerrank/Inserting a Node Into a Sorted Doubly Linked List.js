/**
 * Inserting a Node Into a Sorted Doubly Linked List
 * Easy
 * https://www.hackerrank.com/challenges/insert-a-node-into-a-sorted-doubly-linked-list/problem
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(1)
 */

function sortedInsert(llist, data) {
  let node = {
    data,
    prev: null,
    next: null
  };
  if (!llist) return node;
  let currentNode = llist;
  while (currentNode) {
    let prev = currentNode.prev,
      next = currentNode.next;
    if (
      currentNode.next &&
      node.data < currentNode.next.data &&
      node.data > currentNode.data
    ) {
      node.next = next;
      node.prev = currentNode;
      next.prev = node;
      currentNode.next = node;
      return llist;
    } else if (!currentNode.next && node.data > currentNode.data) {
      node.next = null;
      node.prev = currentNode;
      currentNode.next = node;
      return llist;
    } else if (!currentNode.prev && node.data < currentNode.data) {
      node.next = currentNode;
      node.prev = null;
      currentNode.prev = node;
      return node;
    } else if (node.data === currentNode.data) {
      node.prev = prev;
      node.next = currentNode;
      prev.next = node;
      currentNode.prev = node;
      return llist;
    }
    currentNode = currentNode.next;
  }
  return llist;
}

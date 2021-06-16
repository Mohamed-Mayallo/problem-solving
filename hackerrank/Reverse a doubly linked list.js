/**
 * Reverse a doubly linked list
 * Easy
 * https://www.hackerrank.com/challenges/reverse-a-doubly-linked-list/problem
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(N)
 */

function reverse(llist) {
  if (!llist) return null;
  let currentNode = llist,
    returned = llist;
  while (currentNode) {
    let nextNode = currentNode.next,
      prevNode = currentNode.prev;
    currentNode.next = prevNode;
    currentNode.prev = nextNode;
    returned = currentNode;
    currentNode = currentNode.prev;
  }
  return returned;
}

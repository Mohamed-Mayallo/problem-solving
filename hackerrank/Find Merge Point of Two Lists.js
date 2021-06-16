/**
 * Find Merge Point of Two Lists
 * Easy
 * https://www.hackerrank.com/challenges/find-the-merge-point-of-two-joined-linked-lists/problem
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(N)
 */

function findMergeNode(headA, headB) {
  if (!headA || !headB) return null;
  let currentA = headA,
    currentB = headB,
    map = new Map();
  while (currentA) {
    map.set(currentA, currentA);
    currentA = currentA.next;
  }
  while (currentB) {
    const found = map.get(currentB);
    if (found === currentB) return found.data;
    currentB = currentB.next;
  }
  return null;
}

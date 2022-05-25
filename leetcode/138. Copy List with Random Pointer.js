/**
 * 138. Copy List with Random Pointer
 * Medium
 * https://leetcode.com/problems/copy-list-with-random-pointer/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(N)
 */

var copyRandomList = function (head) {
  let current = head;
  const map = new Map();
  while (current) {
    const nodeCopy = getCopyOrCreate(map, current);
    if (current.next) {
      nodeCopy.next = getCopyOrCreate(map, current.next);
    }
    if (current.random) {
      nodeCopy.random = getCopyOrCreate(map, current.random);
    }
    current = current.next;
  }
  return map.get(head);
};

var getCopyOrCreate = function (map, node) {
  if (!map.get(node)) {
    map.set(node, new Node(node.val));
  }
  return map.get(node);
};

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

// ----------------------------------------------------------------------------

/**
 * Second solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(1)
 */

var hasCycle = function (head) {
    if (!head || !head.next) return false;
    let slow = head,
        fast = head.next;
    while (fast) {
        slow = slow.next;
        fast = fast.next ? fast.next.next : null;
        if (fast === slow) return true;
    }
    return false;
};

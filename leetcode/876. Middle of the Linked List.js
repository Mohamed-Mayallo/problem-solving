/**
 * 876. Middle of the Linked List
 * Easy
 * https://leetcode.com/problems/middle-of-the-linked-list/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(1)
 */

var middleNode = function (head) {
    let slow = head,
        fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};

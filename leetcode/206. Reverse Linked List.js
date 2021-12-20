/**
 * 206. Reverse Linked List
 * Easy
 * https://leetcode.com/problems/reverse-linked-list/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(1)
 */

var reverseList = function (head) {
    let currentNode = head;
    let prevNode = null;
    while (currentNode) {
        let nextNode = currentNode.next;
        currentNode.next = prevNode;
        prevNode = currentNode;
        currentNode = nextNode;
    }
    return prevNode;
};

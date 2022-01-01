/**
 * 92. Reverse Linked List II
 * Medium
 * https://leetcode.com/problems/reverse-linked-list-ii/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(1)
 */

var reverseBetween = function (head, left, right) {
    if (left === right) return head;

    let currentNode = head;
    let prevNode = null;
    let count = 1;
    while (currentNode && count < left) {
        count++;
        prevNode = currentNode;
        currentNode = currentNode.next;
    }

    let lastNodeBeforeRange = prevNode;
    let lastNodeOfRange = currentNode;

    while (count >= left && count <= right) {
        count++;
        let nextNode = currentNode.next;
        currentNode.next = prevNode;
        prevNode = currentNode;
        currentNode = nextNode;
    }

    let firstNodeAfterRange = currentNode;
    let firstNodeOfRange = prevNode;

    lastNodeOfRange.next = firstNodeAfterRange;
    if (lastNodeBeforeRange) lastNodeBeforeRange.next = firstNodeOfRange;
    else head = firstNodeOfRange;

    return head;
};

/**
 * Start of LinkedList Cycle
 * Medium
 * https://www.educative.io/courses/grokking-the-coding-interview/N7pvEn86YrN
 */

/**
  Problem Statement#
  Given the head of a Singly LinkedList that contains a cycle, write a function to find the starting node of the cycle.
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(N)
 */

const find_cycle_start = function (head) {
    if (!head) return null;
    let m = new Map();
    let currentNode = head;
    while (currentNode) {
        let node = m.get(currentNode);
        if (!node) m.set(currentNode, currentNode);
        else return node;
        currentNode = currentNode.next;
    }
    return head;
};

/**
 * Second solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(1)
 */

const find_cycle_start = function (head) {
    if (!head) return null;
    let slow = head,
        fast = head.next.next,
        length = undefined;
    while (fast) {
        if (slow === fast && !length) {
            let meetingPoint = slow;
            slow = slow.next;
            length = 1;
            while (slow !== meetingPoint) {
                length++;
                slow = slow.next;
            }
            slow = head;
            fast = head;
        }
        if (!length) {
            slow = slow.next;
            fast = fast.next.next;
        } else {
            let i = 0;
            while (i < length) {
                fast = fast.next;
                i++;
            }
            if (fast !== slow) {
                fast = fast.next;
                slow = slow.next;
            }
        }
        if (slow === fast && length) {
            return slow;
        }
    }
    return head;
};

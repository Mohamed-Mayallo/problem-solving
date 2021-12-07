/**
 * LinkedList Cycle
 * Easy
 * https://www.educative.io/courses/grokking-the-coding-interview/N7rwVyAZl6D
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(1)
 */

/**
  Problem Statement#
  Given the head of a Singly LinkedList, write a function to determine if the LinkedList has a cycle in it or not.
 */

const has_cycle = function (head) {
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

/**
 * Middle of the LinkedList
 * Easy
 * https://www.educative.io/courses/grokking-the-coding-interview/3j5GD3EQMGM
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(1)
 */

/**
  Problem Statement#
  Given the head of a Singly LinkedList, write a method to return the middle node of the LinkedList.

  If the total number of nodes in the LinkedList is even, return the second middle node.

  Example 1:
  Input: 1 -> 2 -> 3 -> 4 -> 5 -> null
  Output: 3

  Example 2:
  Input: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
  Output: 4

  Example 3:
  Input: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> null
  Output: 4
 */

const find_middle_of_linked_list = function (head) {
    let slow = head,
        fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};

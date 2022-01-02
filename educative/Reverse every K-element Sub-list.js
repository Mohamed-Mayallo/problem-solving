/**
 * Reverse every K-element Sub-list
 * Medium
 * https://www.educative.io/courses/grokking-the-coding-interview/qVANqMonoB2
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(1)
 */

/**
  Problem Statement

  Given the head of a LinkedList and a number ‘k’, reverse every ‘k’ sized sub-list starting from the head.
  If, in the end, you are left with a sub-list with less than ‘k’ elements, reverse it too.
 */

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }

    get_list() {
        result = '';
        temp = this;
        while (temp !== null) {
            result += temp.value + ' ';
            temp = temp.next;
        }
        return result;
    }
}

const reverse_every_k_elements = function (head, k) {
    if (k <= 1 || head === null) return head;

    let currentNode = head;
    let prevNode = null;
    let count = 0;
    while (currentNode) {
        let lastNodeOfRange = currentNode;
        let firstNodeBeforeRange = prevNode;
        while (currentNode && count < k) {
            let nextNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextNode;
            count++;
        }
        lastNodeOfRange.next = currentNode;
        if (firstNodeBeforeRange) firstNodeBeforeRange.next = prevNode;
        else head = prevNode;
        prevNode = lastNodeOfRange;
        count = 0;
    }
    return head;
};

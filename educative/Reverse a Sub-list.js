/**
 * Reverse a Sub-list
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

  Given the head of a LinkedList and two positions ‘p’ and ‘q’, reverse the LinkedList from position ‘p’ to ‘q’.
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

const reverse_sub_list = function (head, p, q) {
    if (p === q) return head;

    let currentNode = head;
    let prevNode = null;
    let count = 1;
    while (currentNode && count < p) {
        count++;
        prevNode = currentNode;
        currentNode = currentNode.next;
    }

    let lastNodeBeforeRange = prevNode;
    let lastNodeOfRange = currentNode;

    while (count >= p && count <= q) {
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

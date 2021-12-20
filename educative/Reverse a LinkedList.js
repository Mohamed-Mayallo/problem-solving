/**
 * Reverse a LinkedList
 * Easy
 * https://www.educative.io/courses/grokking-the-coding-interview/3wENz1N4WW9
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(1)
 */

/**
  Problem Statement#
  Given the head of a Singly LinkedList, reverse the LinkedList. Write a function to return the new head of the reversed LinkedList.
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

const reverse = function (head) {
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

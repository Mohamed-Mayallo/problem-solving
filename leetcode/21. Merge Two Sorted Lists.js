/**
 * 21. Merge Two Sorted Lists
 * Easy
 * https://leetcode.com/problems/merge-two-sorted-lists/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(N)
 */

var mergeTwoLists = function (list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;

    let head = null;
    if (list1.val <= list2.val) {
        head = new ListNode(list1.val);
        list1 = list1.next;
    } else {
        head = new ListNode(list2.val);
        list2 = list2.next;
    }
    let headRef = head;

    while (list1 && list2) {
        const node =
            list1.val <= list2.val
                ? new ListNode(list1.val)
                : new ListNode(list2.val);

        head.next = node;
        head = head.next;

        if (list1.val <= list2.val) list1 = list1.next;
        else list2 = list2.next;
    }

    if (list1) head.next = list1;
    if (list2) head.next = list2;

    return headRef;
};

/**
 * Second solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(N)
 */

var mergeTwoLists = function (list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;

    if (list1.val <= list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};

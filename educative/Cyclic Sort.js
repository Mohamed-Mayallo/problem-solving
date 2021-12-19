/**
 * Cyclic Sort
 * Easy
 * https://www.educative.io/courses/grokking-the-coding-interview/B8qXVqVwDKY
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(1)
 */

/**
  Problem Statement

  We are given an array containing n objects. Each object, when created, was assigned a unique number from the range 1 to n based on their creation sequence. This means that the object with sequence number 3 was created just before the object with sequence number 4.
  Write a function to sort the objects in-place on their creation sequence number in O(n)O(n) and without using any extra space. For simplicity, let’s assume we are passed an integer array containing only the sequence numbers, though each number is actually an object.

  Example 1:
  Input: [3, 1, 5, 4, 2]
  Output: [1, 2, 3, 4, 5]

  Example 2:
  Input: [2, 6, 4, 3, 1, 5]
  Output: [1, 2, 3, 4, 5, 6]

  Example 3:
  Input: [1, 5, 6, 4, 3, 2]
  Output: [1, 2, 3, 4, 5, 6]
 */

const cyclic_sort = function (nums) {
    let i = 0;
    while (i < nums.length) {
        let n = nums[i];
        if (nums[i] !== i + 1) {
            let currentN = nums[n - 1];
            nums[n - 1] = n;
            nums[i] = currentN;
            if (nums[i] === i + 1) i++;
        } else i++;
    }
    return nums;
};

/**
 * Kth Smallest Number in M Sorted Lists
 * Medium
 * https://www.educative.io/courses/grokking-the-coding-interview/myAqDMyRXn3
 */

/**
  Problem Statement

  Given ‘M’ sorted arrays, find the K’th smallest number among all the arrays.

  Example 1:
  Input: L1=[2, 6, 8], L2=[3, 6, 7], L3=[1, 3, 4], K=5
  Output: 4
  Explanation: The 5th smallest number among all the arrays is 4, this can be verified from 
  the merged list of all the arrays: [1, 2, 3, 3, 4, 6, 6, 7, 8]

  Example 2:
  Input: L1=[5, 8, 9], L2=[1, 7], K=3
  Output: 7
  Explanation: The 3rd smallest number among all the arrays is 7.
 */

/**
 * First solution
 * -----------------
 * Time complexity  : add O(M Log(M)) where M is the matrix length
 * Space complexity : add O(N) where N is the total number in arrays
 */

const find_Kth_smallest = function (lists, k) {
  const minHeap = [];
  for (let i = 0; i < lists.length; i++) {
    const arr = lists[i];
    minHeap.push({ n: arr[0], arrIndex: i, nextIndex: 1 });
  }
  minHeap.sort((a, b) => a.n - b.n);
  const merged = [];
  while (minHeap.length || merged.length < k) {
    const peek = minHeap.shift();
    merged.push(peek.n);
    if (peek.nextIndex < lists[peek.arrIndex].length) {
      minHeap.push({
        n: lists[peek.arrIndex][peek.nextIndex],
        arrIndex: peek.arrIndex,
        nextIndex: peek.nextIndex + 1
      });
      minHeap.sort((a, b) => a.n - b.n);
    }
  }
  return merged[k - 1];
};

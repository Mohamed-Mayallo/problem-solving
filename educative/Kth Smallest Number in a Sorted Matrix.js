/**
 * Kth Smallest Number in a Sorted Matrix
 * Hard
 * https://www.educative.io/courses/grokking-the-coding-interview/x1NJVYKNvqz
 */

/**
  Problem Statement

  Given an N * N matrix where each row and column is sorted in ascending order, find the Kth smallest element in the matrix.

  Example 1:
  Input: Matrix = [
      [2, 6, 8], 
      [3, 7, 10],
      [5, 8, 11]
    ], 
    K=5
  Output: 7
  Explanation: The 5th smallest number in the matrix is 7.
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(min(K,N)+K∗logN)
 * Space complexity : O(N)
 */

const find_Kth_smallest = function (matrix, k) {
    const minHeap = [];
    for (let i = 0; i < matrix.length; i++) {
        const arr = matrix[i];
        minHeap.push({ n: arr[0], arrIndex: i, nextIndex: 1 });
    }
    minHeap.sort((a, b) => a.n - b.n);
    let count = 0,
        num = null;
    while (minHeap.length) {
        const peek = minHeap.shift();
        if (peek.nextIndex < matrix[peek.arrIndex].length) {
            minHeap.push({
                n: matrix[peek.arrIndex][peek.nextIndex],
                arrIndex: peek.arrIndex,
                nextIndex: peek.nextIndex + 1,
            });
            minHeap.sort((a, b) => a.n - b.n);
        }
        count++;
        if (count === k) {
            num = peek.n;
            break;
        }
    }
    return num;
};

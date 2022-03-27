/**
 * 'K' Closest Points to the Origin
 * Easy
 * https://www.educative.io/courses/grokking-the-coding-interview/3YxNVYwNR5p
 */

/**
    Problem Statement
  
    Given an array of points in a 2D plane, find ‘K’ closest points to the origin.

    Example 1:
    Input: points = [[1,2],[1,3]], K = 1
    Output: [[1,2]]
    Explanation: The Euclidean distance between (1, 2) and the origin is sqrt(5).
    The Euclidean distance between (1, 3) and the origin is sqrt(10).
    Since sqrt(5) < sqrt(10), therefore (1, 2) is closer to the origin.

    Example 2:
    Input: point = [[1, 3], [3, 4], [2, -1]], K = 2
    Output: [[1, 3], [2, -1]]
  */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N Log(K))
 * Space complexity : O(K)
 */

const find_closest_points = function (points, k) {
    let maxHeap = [];
    for (let i = 0; i < points.length; i++) {
        let p = points[i],
            n = p.x * p.x + p.y * p.y,
            peek = maxHeap[0] !== undefined ? maxHeap[0].val : null;
        if (maxHeap.length < k) {
            maxHeap.push({ val: n, p });
            if (maxHeap.length === k) maxHeap.sort((a, b) => b.val - a.val);
        } else if (n < peek) {
            maxHeap.shift();
            maxHeap.push({ val: n, p });
            maxHeap.sort((a, b) => b.val - a.val);
        }
    }
    return maxHeap.map((p) => p.p);
};

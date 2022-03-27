/**
 * 973. K Closest Points to Origin
 * Medium
 * https://leetcode.com/problems/k-closest-points-to-origin/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N Log (K))
 * Space complexity : O(K)
 */

var kClosest = function (points, k) {
    let maxHeap = [];
    for (let i = 0; i < points.length; i++) {
        let p = points[i],
            n = p[0] * p[0] + p[1] * p[1],
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
    return maxHeap.map((pi) => pi.p);
};

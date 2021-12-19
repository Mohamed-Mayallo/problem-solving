/**
 * 986. Interval List Intersections
 * Medium
 * https://leetcode.com/problems/interval-list-intersections/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(1)
 */

var intervalIntersection = function (firstList, secondList) {
    let result = [];
    let i = 0,
        j = 0;
    while (i < firstList.length && j < secondList.length) {
        let a = firstList[i],
            b = secondList[j];
        let aIntervalB = a[0] >= b[0] && b[1] >= a[0];
        let bIntervalA = b[0] >= a[0] && a[1] >= b[0];
        if (aIntervalB || bIntervalA) {
            result.push([Math.max(a[0], b[0]), Math.min(a[1], b[1])]);
        }
        if (a[1] < b[1]) {
            i++;
        } else {
            j++;
        }
    }
    return result;
};

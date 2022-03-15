/**
 *  447 · Search in a Big Sorted Array
 *  Medium
 *  https://www.lintcode.com/problem/447/
 */

/**
 *  First solution
 *  -----------------
 *  Time complexity  : O(Log(N))
 *  Space complexity : O(1)
 */

export class Solution {
    /**
     * searchBigSortedArray
     *
     * @param reader: An instance of ArrayReader.
     * @param target: An integer
     * @return: An integer which is the first index of target.
     */
    searchBigSortedArray(reader, target) {
        let start = 0,
            end = start + 1;
        while (reader[end] === undefined || reader[end] < target) {
            start = end;
            end *= 2;
            if (reader[end] === undefined) {
                end = start + 1;
                if (!reader[end]) {
                    end = start;
                    start = 0;
                    break;
                }
            }
        }
        return this.binarySearch(reader, start, end, target);
    }

    binarySearch(reader, start, end, target) {
        while (end >= start) {
            let mid = Math.floor((start + end) / 2);
            if (target === reader[mid]) {
                let i = mid;
                while (target === reader[i]) {
                    i--;
                }
                return i + 1;
            } else if (target > reader[mid]) {
                start = mid + 1;
            } else if (target < reader[mid]) {
                end = mid - 1;
            }
        }
        return -1;
    }
}

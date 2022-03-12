/**
 * 744. Find Smallest Letter Greater Than Target
 * Easy
 * https://leetcode.com/problems/find-smallest-letter-greater-than-target/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(Log(N))
 * Space complexity : O(1)
 */

var nextGreatestLetter = function (letters, target) {
    let start = 0,
        end = letters.length - 1;
    while (end >= start) {
        let mid = Math.floor((end + start) / 2);
        let i = letters[mid];
        if (target === i) {
            let next = letters[mid + 1];
            if (i === next) {
                start = mid + 1;
            } else {
                return letters[mid + 1] || letters[0];
            }
        } else if (target < i) {
            end = mid - 1;
        } else if (target > i) {
            start = mid + 1;
        }
    }
    return letters[start] || letters[0];
};

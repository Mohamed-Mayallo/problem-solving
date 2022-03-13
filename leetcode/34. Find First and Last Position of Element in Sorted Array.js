/**
 * 34. Find First and Last Position of Element in Sorted Array
 * Medium
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(Log(N))
 * Space complexity : O(1)
 */

var searchRange = function (nums, target) {
    let start = 0,
        end = nums.length - 1,
        isFound = false;
    while (end >= start) {
        let mid = Math.floor((start + end) / 2);
        let i = nums[mid];
        if (target === i && !isFound) {
            isFound = true;
            start = mid;
            end = mid;
        } else if (target > i) {
            start = mid + 1;
        } else if (target < i) {
            end = mid - 1;
        }
        if (isFound) {
            if (nums[start] === target) start--;
            if (nums[end] === target) end++;
            if (nums[start] !== target && nums[end] !== target)
                return [start + 1, end - 1];
        }
    }
    return [-1, -1];
};

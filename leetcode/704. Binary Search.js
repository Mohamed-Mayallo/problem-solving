/**
 * 704. Binary Search
 * Easy
 * https://leetcode.com/problems/binary-search/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(log n)
 * Space complexity : O(1)
 */

var search = function(nums, target) {
  let mn = 0;
  let mx = nums.length - 1;

  while (mn <= mx) {
    let md = Math.floor((mx + mn) / 2);

    if (nums[md] < target) {
      mn = md + 1;
    } else if (nums[md] > target) {
      mx = md - 1;
    } else {
      return md;
    }
  }

  return -1;
};

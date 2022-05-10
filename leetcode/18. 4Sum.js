/**
 * 18. 4Sum
 * Medium
 * https://leetcode.com/problems/4sum/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N3)
 * Space complexity : O(N)
 */

var fourSum = function (arr, target) {
  arr.sort((a, b) => a - b);
  let quadruplets = [];
  let i = 0;
  while (i < arr.length - 3) {
    let t1 = target - arr[i];
    let j = i + 1;
    while (j < arr.length - 2) {
      let t2 = t1 - arr[j];
      let k1 = j + 1,
        k2 = arr.length - 1;
      while (k1 < k2) {
        let sum = arr[k1] + arr[k2];
        if (t2 === sum) {
          quadruplets.push([arr[i], arr[j], arr[k1], arr[k2]]);
          k1++;
          k2--;
          while (k1 < k2 && arr[k1] === arr[k1 - 1]) k1++;
          while (k1 < k2 && arr[k2] === arr[k2 + 1]) k2--;
        } else if (t2 < sum) {
          k2--;
        } else if (t2 > sum) {
          k1++;
        }
      }
      j++;
      while (j < arr.length - 2 && arr[j] === arr[j - 1]) j++;
    }
    i++;
    while (i < arr.length - 3 && arr[i] === arr[i - 1]) i++;
  }
  return quadruplets;
};

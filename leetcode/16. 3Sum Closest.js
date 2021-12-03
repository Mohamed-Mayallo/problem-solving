/**
 * 16. 3Sum Closest
 * Medium
 * https://leetcode.com/problems/3sum-closest/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N^2)
 * Space complexity : O(N)
 */

var threeSumClosest = function (nums, target) {
    let minDiff = Infinity,
        closestSum = Infinity;
    if (nums.length < 3) return closestSum;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        let fixed = nums[i],
            leftPointer = i + 1,
            rightPointer = nums.length - 1;
        while (leftPointer < rightPointer) {
            let left = nums[leftPointer],
                right = nums[rightPointer],
                sum = left + right + fixed;
            if (sum > target) {
                rightPointer--;
                if (Math.abs(sum - target) < minDiff) {
                    closestSum = sum;
                    minDiff = Math.abs(sum - target);
                }
            } else if (sum < target) {
                leftPointer++;
                if (Math.abs(sum - target) < minDiff) {
                    closestSum = sum;
                    minDiff = Math.abs(sum - target);
                }
            } else {
                minDiff = 0;
                closestSum = sum;
                break;
            }
        }
    }
    return closestSum;
};

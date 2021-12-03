/**
 * Triplet Sum Close to Target
 * Medium
 * https://www.educative.io/courses/grokking-the-coding-interview/3YlQz7PE7OA
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N^2)
 * Space complexity : O(N)
 */

/**
  Problem Statement

  Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet. If there are more than one such triplet, return the sum of the triplet with the smallest sum.

  Example 1:
  Input: [-2, 0, 1, 2], target=2
  Output: 1
  Explanation: The triplet [-2, 1, 2] has the closest sum to the target.

  Example 2:
  Input: [-3, -1, 1, 2], target=1
  Output: 0
  Explanation: The triplet [-3, 1, 2] has the closest sum to the target.

  Example 3:
  Input: [1, 0, 1, 1], target=100
  Output: 3
  Explanation: The triplet [1, 1, 1] has the closest sum to the target.
 */

const triplet_sum_close_to_target = function (arr, target_sum) {
    let minDiff = Infinity,
        closestSum = Infinity;
    if (arr.length < 3) return closestSum;
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        let fixed = arr[i],
            leftPointer = i + 1,
            rightPointer = arr.length - 1;
        while (leftPointer < rightPointer) {
            let left = arr[leftPointer],
                right = arr[rightPointer],
                sum = left + right + fixed;
            if (sum > target_sum) {
                rightPointer--;
                if (Math.abs(sum - target_sum) < minDiff) {
                    closestSum = sum;
                    minDiff = Math.abs(sum - target_sum);
                }
            } else if (sum < target_sum) {
                leftPointer++;
                if (Math.abs(sum - target_sum) < minDiff) {
                    closestSum = sum;
                    minDiff = Math.abs(sum - target_sum);
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

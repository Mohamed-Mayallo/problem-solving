/**
 *  Permutations
 *  Medium
 *  https://www.educative.io/courses/grokking-the-coding-interview/B8R83jyN3KY
 */

/**
    Problem Statement

    Given a set of distinct numbers, find all of its permutations.
    Permutation is defined as the re-arranging of the elements of the set. For example, {1, 2, 3} has the following six permutations:

    {1, 2, 3}
    {1, 3, 2}
    {2, 1, 3}
    {2, 3, 1}
    {3, 1, 2}
    {3, 2, 1}
    If a set has ‘n’ distinct elements it will have n!n! permutations.

    Example 1:
    Input: [1,3,5]
    Output: [1,3,5], [1,5,3], [3,1,5], [3,5,1], [5,1,3], [5,3,1]
 */

/**
 *  First solution
 *  -----------------
 *  Time complexity  : O(N * N!)
 *  Space complexity : O(N * N!)
 */

const find_permutations = function (nums) {
    if (!nums) return [];
    let result = [[nums[0]]];
    for (let n = 1; n < nums.length; n++) {
        let num = nums[n];
        let setLen = result.length;
        let newSet = [];
        for (let i = 0; i < setLen; i++) {
            let item = result[i];
            for (let j = 0; j <= item.length; j++) {
                let jItem = [...item];
                jItem.splice(j, 0, num);
                newSet.push(jItem);
            }
        }
        result = newSet;
    }
    return result;
};

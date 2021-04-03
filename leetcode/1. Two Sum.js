/**
 * 1. Two Sum
 * -------------
 * Easy
 * --------------
 * https://leetcode.com/problems/two-sum/
 * 
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N^2)
 * Space complexity : O(1)
 */

var twoSum = function(nums, target) {
    let indexes = []
    for (let i = 0; i < nums.length; i++) {
        let n = nums[i]
        for (let j = 0; j < nums.length; j++) {
            let otherN = nums[j]
            if (j === i) continue
            if (n + otherN === target) {
                indexes.push(i, j)
                break
            }
        }
        if (indexes.length) break
    }
    return indexes
};
twoSum([3,3], 6)


// ----------------------------------------------------------------------------

/**
 * Second solution
 * -----------------
 * Time complexity  : O(Nlog(N))
 * Space complexity : O(1)
 */

var twoSum = function(nums, target) {
    let indexes = [],
        sortedNums = [...nums].sort((a,b) => a - b)
        i = 0,
        j = nums.length - 1
    while (i < j) {
        let iN = sortedNums[i],
            jN = sortedNums[j],
            sum = iN + jN
        if (sum === target) {
            nums.map((a, x) => {
                if (iN === a) indexes.push(x)
                else if (jN === a) indexes.push(x)
            })
            break
        } else {
            if (sum > target) j--
            if (sum < target) i++
        }
    }
    return indexes
};
twoSum([3,2,4], 6)


// ----------------------------------------------------------------------------


/**
 * Third solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(N)
 */

var twoSum = function(nums, target) {
    let indexes = [],
        map = {}
    for (let i = 0; i < nums.length; i++) {
        let n = nums[i],
            otherN = target - n
        if (map[otherN] !== undefined) {
            indexes.push(i, map[otherN])
            break
        }
        else map[n] = i
    }
    return indexes
};
twoSum([2,7,11,15], 9)


// ----------------------------------------------------------------------------


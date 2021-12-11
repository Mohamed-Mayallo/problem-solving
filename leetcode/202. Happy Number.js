/**
 * 202. Happy Number
 * Easy
 * https://leetcode.com/problems/happy-number/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(log(N))  Tricky !!
 * Space complexity : O(N)  Tricky !!
 */

var isHappy = function (n) {
    let map = {};
    let digitSum = getNumDigitsSum(n);
    while (!map[digitSum]) {
        map[digitSum] = true;
        n = digitSum;
        digitSum = getNumDigitsSum(n);
        if (digitSum === 1) return true;
    }
    return false;
};

const getNumDigitsSum = function (num) {
    let currentNum = num + '';
    let i = 0;
    let sum = 0;
    while (i < currentNum.length) {
        sum += currentNum[i] * currentNum[i];
        i++;
    }
    return sum;
};

/**
 * Second solution
 * -----------------
 * Time complexity  : O(log(N))  Tricky !!
 * Space complexity : O(1)  Tricky !!
 */

var isHappy = function (n) {
    let slow = n,
        fast = n;
    while (true) {
        slow = getNumDigitsSum(slow);
        fast = getNumDigitsSum(fast);
        fast = getNumDigitsSum(fast);
        if (slow === fast) break;
    }
    if (slow === 1) return true;
    return false;
};

const getNumDigitsSum = function (num) {
    let currentNum = num + '';
    let i = 0;
    let sum = 0;
    while (i < currentNum.length) {
        sum += currentNum[i] * currentNum[i];
        i++;
    }
    return sum;
};

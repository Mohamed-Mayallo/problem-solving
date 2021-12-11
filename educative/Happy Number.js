/**
 * Happy Number
 * Medium
 * https://www.educative.io/courses/grokking-the-coding-interview/39q3ZWq27jM
 */

/**
  Problem Statement

  Any number will be called a happy number if, after repeatedly replacing it with a number equal to the sum of the square of all of its digits, leads us to number ‘1’. All other (not-happy) numbers will never reach ‘1’. Instead, they will be stuck in a cycle of numbers which does not include ‘1’.

  Example 1:
  Input: 23   
  Output: true (23 is a happy number)  

  Example 2:
  Input: 12   
  Output: false (12 is not a happy number)  
  Step ‘13’ leads us back to step ‘5’ as the number becomes equal to ‘89’, this means that we can never reach ‘1’, therefore, ‘12’ is not a happy number.
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(log(N))  Tricky !!
 * Space complexity : O(N)  Tricky !!
 */

const find_happy_number = function (num) {
    let map = {};
    let digitSum = getNumDigitsSum(num);
    while (!map[digitSum]) {
        map[digitSum] = true;
        num = digitSum;
        digitSum = getNumDigitsSum(num);
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

const find_happy_number = function (num) {
    let slow = num,
        fast = num;
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

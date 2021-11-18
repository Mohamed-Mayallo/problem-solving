/**
 * Fruits into Baskets
 * Medium
 * https://www.educative.io/courses/grokking-the-coding-interview/Bn2KLlOR0lQ
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(1)
 */

/**
  Problem Statement#
  Given an array of characters where each character represents a fruit tree, you are given two baskets, and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.

  You can start with any tree, but you can’t skip a tree once you have started. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.

  Write a function to return the maximum number of fruits in both baskets.

  Example 1:
  Input: Fruit=['A', 'B', 'C', 'A', 'C']
  Output: 3
  Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']

  Example 2:
  Input: Fruit=['A', 'B', 'C', 'B', 'B', 'C']
  Output: 5
  Explanation: We can put 3 'B' in one basket and two 'C' in the other basket. 
  This can be done if we start with the second letter: ['B', 'C', 'B', 'B', 'C']
 */

const fruits_into_baskets = function (fruits) {
    let wStart = 0,
        wMap = {},
        mx = 0;

    for (let wEnd = 0; wEnd < fruits.length; wEnd++) {
        let wEndLtr = fruits[wEnd];

        if (!wMap[wEndLtr]) wMap[wEndLtr] = 1;
        else wMap[wEndLtr]++;

        while (Object.keys(wMap).length > 2) {
            let wStartLtr = fruits[wStart];
            wMap[wStartLtr]--;
            if (wMap[wStartLtr] <= 0) delete wMap[wStartLtr];
            wStart++;
        }

        let wLen = wEnd - wStart + 1;
        mx = Math.max(mx, wLen);
    }

    return mx;
};

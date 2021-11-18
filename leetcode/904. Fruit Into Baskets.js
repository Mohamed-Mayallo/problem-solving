/**
 * 904. Fruit Into Baskets
 * Medium
 * https://leetcode.com/problems/fruit-into-baskets/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(1)
 */

var totalFruit = function (fruits) {
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

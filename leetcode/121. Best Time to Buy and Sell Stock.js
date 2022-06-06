/**
 * 121. Best Time to Buy and Sell Stock
 * Easy
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(N)
 * Space complexity : O(1)
 */

var maxProfit = function (prices) {
  let min = prices[0],
    max = null,
    profit = 0;
  for (let i = 1; i < prices.length; i++) {
    let n = prices[i];
    if (n < min) {
      profit = Math.max(max - min, profit);
      min = Math.min(n, min);
      max = null;
    } else if (n > min) {
      max = Math.max(max || 0, n);
      profit = Math.max(max - min, profit);
    }
  }
  return profit;
};

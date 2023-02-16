/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // prices is an integer array
    // return the max profit possible
    // Input: prices = [7,1,5,3,6,4] Output: 5
    // sliding window aka two pointers
    // set a left and right pointer
    // declare a max variable
    // loop through prices using right pointer
    // take the difference of the values of the right and the left
    // then update the max using that number
    // iterate the right pointer
    // if the profit is ever negative we can update the left pointer
    // once the loop is finished return the max

    let l = 0, r = 1, max = 0;
    while (r < prices.length) {
        let profit = prices[r] - prices[l];
        if (profit < 0) {
            l = r;
        }
        max = Math.max(max, profit);
        r++;
    }
    return max;
};
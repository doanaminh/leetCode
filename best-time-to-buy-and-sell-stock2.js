/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // prices is an integer array
    // return the max sum of contiguous subarray
    // Input: prices = [7,1,5,3,6,4] Output: 5
    // sliding window aka two pointers
    // set two pointers left and right and a sum
    // iterate through the array using those pointers
    // right is less than the length of prices keep summing
    // if the sum is ever less than 0 reset the left pointer to right + 1
    // then set right to left + 1
    // after done looping return the sum

    let l = 0, r = 1, sum = -Infinity;
    while (r < prices.length) {
        let x = prices[r] - prices[l];
        if (x < 0) {
            l = r; 
            r = l;
        }
        sum = Math.max(sum, x);
        r++;
    }
    return sum > 0 ? sum : 0;
};
var maxProfit = function(prices) {
    // prices is an array that of a stock price over a period of time
    // prices.length can't be empty and can go up to 10^5
    // prices[i] can't be negative
    // return maximum profit that can be made in an integer
    // Input: prices = [7,1,5,3,6,4] Output: 5
    
    // loop prices
    // loop again through the rest of element
    // define a res variable
    // for every new max redefine res variable
    // return res

    let max = 0;
    let l = 0;
    let r = 1;
    while (r < prices.length) {
        if (prices[l] < prices[r]) {
            const profit = prices[r] - prices[l];
            if (profit > max) {
                max = profit;
            }
        } else {
            l = r;
        }
        r += 1;
    }
    return max;
};
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let dp = new Array(amount + 1).fill(amount + 1);
    dp[0] = 0;
    for (i = 1; i < amount + 1; i++) {
        for (c of coins) {
            if (i - c >= 0) {
                dp[i] = Math.min(dp[i], 1 + dp[i - c]);
            } 
        }
    }
    console.log(dp)
    if (dp[amount] != amount + 1) {
        return dp[amount];
    } else {
        return -1;
    }
    
};
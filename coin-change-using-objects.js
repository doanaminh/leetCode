/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    // coins is the value of coins is an array of available and amount is the total you want to achieve
    // an infinite amount of coins is available
    // return the minimum amount of coins needed to achieve the amount
    // if amount cannot be reached then return -1
    // Input: coins = [1,2,5], amount = 11
    // lets use bottom up dynamic programming
    // from amount = 0 there will be 0 coins possible to achieve 0
    // from amount = 1 there will be c possible coins to achieve 1 (depending on what value coins are available)
    // we will store the amount of coins needed for that amount and update it taking the minimum with the current value vs the new value that we calculating
    // for every amount we will check every coin as long as the amount - coin is >= to 0
    // so calculating from the last step up we will hit every possible way
    // so for amount n we will have the minimum coins needed to achieve n
    // return that value if the value is not Infinity
    // else return -1
    
    let dp = {};
    dp[0] = 0;
    for (i = 1; i < amount + 1; i++) {
        dp[i] = Infinity;
    }
    for (i = 1; i < amount + 1; i++) {
        for (c of coins) {
            if (i - c >= 0) {
                dp[i] = Math.min(dp[i], dp[i - c] + 1);
            } 
        }
    }
    if (dp[amount] != Infinity) {
        return dp[amount];
    } else {
        return -1;
    }
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const dp = {};
    for (i = 0; i < nums.length; i++) {
        dp[i] = 1;
    }
    for (i = nums.length - 1; i >= 0; i--) {
        for (j = i + 1; j < nums.length; j++) {
            if (nums[i] < nums[j]) {
                dp[i] = Math.max(dp[i], 1 + dp[j]);
            }
        }
    }
    return Math.max(...Object.values(dp));
};
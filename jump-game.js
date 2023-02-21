/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    // nums is an integer array
    // return true or false if it is possible to reach the last index of nums
    // each value of nums represents the max numbers of indices can be advanced from current index
    // Input: nums = [2,3,1,1,4] Output: true
    // bottom up dp
    // create an array that will hold a value of true or false
    // edge case will be true as long as the last element of nums is at least 0
    // looping trhough nums in reverse order 
    // as long as the current index has at minimum 1 step to reach the next index that holds true then current index can reach the last index
    // if not then it will be false
    // after looping through nums the first element should hold the value to tell if it is possible to reach the last element from the first one
    // return the first element of the array

    const dp = new Array(nums.length).fill(false);
    dp[nums.length - 1] = true;
    for (i = nums.length - 2; i >= 0; i--) {
        for (j = i + 1; j < nums.length; j++) {
            if (dp[j] === true && nums[i] >= j - i) {
                dp[i] = dp[j];
            }
        }
    }
    return dp[0];
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    // nums is an integer array
    // return max product contiguous subarray
    // Input: nums = [2,3,-2,4] Output: 6
    // keeping min and max of contiguous subarray
    // if we ever iterate to a 0 reset the min and max
    // define a variable that holds max of each iteration as we go through nums
    // through each iteration we will multiply the current sum with the current value
    // update the max and the min each time
    // after  the loop is over return the res
    
    let res = Math.max(...nums), min = 1, max = 1;
    for (i = 0; i < nums.length; i++) {
        let temp = max * nums[i];
        max = Math.max(max * nums[i], min * nums[i], nums[i]);
        min = Math.min(temp, min * nums[i], nums[i]);
        res = Math.max(res, max);
    }
    return res;
};
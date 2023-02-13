/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // nums is an integer arrary
    // return a new array with values mapped to product of array except for self
    // Input: nums = [-1,1,0,-3,3] Output: [0,0,9,0,0]
    // create a hashmap
    // designate a multiplier variable for the first loop through nums
    // set the value of hashmap[i] to the multiplier prefix
    // update the multiplier by multiplying it with the current value of nums
    // loop through nums in reverse order
    // do the same with a new multiiplier variable 
    // update each value in the hashmap by mutltiplying it with the new multiplier
    // update the multiplier variable by multiplying it with the current nums value
    // return the resulting hashmap

    let map = [];
    let x = 1;
    for (i = 0; i < nums.length; i++) {
        map[i] = x;
        x *= nums[i];
    }
    x = 1;
    for (i = nums.length - 1; i >= 0; i--) {
        map[i] *= x;
        x *= nums[i];
    }
    return map;
};
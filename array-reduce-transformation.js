/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    // nums is an integer array
    // fn is a function to be used
    // init is the initial value
    // if length of array === 0 return init
    // solve without using Array.reduce method
    // Input: 
    // nums = [1,2,3,4]
    // fn = function sum(accum, curr) { return accum + curr; }
    // init = 0
    // Output: 10
    // init will hold the result of the algorithm
    // for loop through nums
    // call fn each iteration plugging in init and the current i in for loop
    // update init
    // finish looping
    // return init

    for (i = 0; i < nums.length; i++) {
        init = fn(init, nums[i]);
    }
    return init;
};
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // nums is an integer array
    // return a mapped array of nums with each value changed to the product of the array except self
    // Input: nums = [1,2,3,4] Output: [24,12,8,6]
    // CANNOT use division 
    // create a hashmap
    // loop through nums
    // for every number in nums calculate the product of all the elements to the left of it
    // then loop through nums in the reverse order and get the product of every element to the right of it
    // by the end each value of the hashmap should be the product of nums array except self

    let map = [];
    let pre = 1;
    for (i = 0; i < nums.length; i++) {
        map[i] = pre;
        pre *= nums[i];
    }
    let post = 1;
    for (i = nums.length - 1; i >= 0; i--) {
        map[i] *= post;
        post *= nums[i];
    }
    return map;
};
var productExceptSelf = function(nums) {
    // nums is an integer array
    // return new array with elements mapped to the product of all numbers in nums except nums[i]
    // Input: nums = [1,2,3,4] Output: [24,12,8,6]
    // loop through nums 
    // create a new array with nums[i]
    // find the product of new array
    // define a variable and set the product to it
    // now map nums[i] to the new variable
    // continue the loop until we go through the whole array
    // return the new array

    let res = new Array(nums.length);
    let pre = 1;
    for (i = 0; i < nums.length; i++) {
        res[i] = pre;
        pre *= nums[i];
    }
    let post = 1;
    for (i = nums.length - 1; i >= 0; i--) {
        res[i] *= post;
        post *= nums[i]
    }
    return res;
};
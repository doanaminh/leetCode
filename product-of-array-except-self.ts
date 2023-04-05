function productExceptSelf(nums: number[]): number[] {
    // nums is an integer array
    // return another integer array with each element replaced by the product of the nums arrray except itself
    // CANNOT use the division operator
    // Input: nums = [1,2,3,4] Output: [24,12,8,6]
    // create a res array with length equal to nums
    // make each value 1
    // create a pre variable to temporarily hold the product of each iteration
    // set the pre variable to 1
    // loop through nums 
    // reassign res[i] to pre
    // update pre to pre * nums[i]
    // at the end of this loop res[i] will be the product of all elements to the left of nums[i]
    // loop through nums again but in reverse order this time
    // create a post variable similar to pre
    // update res[i] by multiplying it with post
    // update post by multiplying it with nums[i]
    // by the end of this loop res[i] should be the product of nums except for nums[i]
    // return res
    
    const res: number[] = Array(nums.length);
    let temp: number = 1;
    for (let i: number = 0; i < nums.length; i++) {
        res[i] = temp;
        temp *= nums[i];
    }
    temp = 1;
    for (let i: number = nums.length - 1; i >= 0; i--) {
        res[i] *= temp;
        temp *= nums[i];
    }

    return res;
};
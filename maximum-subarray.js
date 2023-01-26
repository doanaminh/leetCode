var maxSubArray = function(nums) {
    // nums is an array of integers
    // return largest sum of subarray 
    // Input: nums = [-2,1,-3,4,-1,2,1,-5,4] Output: 6
    // start with first element
    // declare a sum variable
    // loop through array
    // if the sum < 0
    // sum = 0
    // sum += el
    // max sum will be updated with every high number
    // return max sum

    let maxSum = nums[0];
    let tempSum = 0;

    nums.forEach(el => {
        if (tempSum < 0) {
            tempSum = 0;
        }
        tempSum += el;
        maxSum = Math.max(maxSum, tempSum);
    })

    return maxSum;
};
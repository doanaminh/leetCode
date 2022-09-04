/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    // nums is an array of numbers
    // return the index number that will give you the same sum of both numbers on the left and right of the index number
    // ex. [1,7,3,6,5,6] => 3
    // // iterate through nums array
    // // get sum of all numbers left and right of the current index
    // // if it matches return the index number
    // // if none of them give the desire results return -1
    
    return nums.findIndex((item, index) => {
        let leftSum = 0;
        let rightSum = 0;
        
        for (i = 0; i < index; i++) {
            leftSum += nums[i];
        };
        
        for (k = nums.length - 1; k > index; k--) {
            rightSum += nums[k];
        };
        
        if (leftSum === rightSum) {
            return true;
        };
    });
    
};
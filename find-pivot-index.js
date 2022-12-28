var pivotIndex = function(nums) {
    // nums is an array of integers
    // return integer indicating the pivot index of nums array
    // [1, 7, 3, 6, 5, 6]  ==> 3
    // loop through the array
    // check conditions on each iteration
    // if conditions are met return the index of the array at that iteration
    // if not then return -1
    for (i = 0; i < nums.length; i++) {
        let left = 0;
        for (j = i - 1; j >= 0; j--) {
            left += nums[j];
        }
        let right = 0;
        for (k = i + 1; k < nums.length; k++) {
            right += nums[k];
        }
        if (left === right) {
            return i;
        }
    }
    return -1;
};
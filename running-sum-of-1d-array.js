var runningSum = function(nums) {
    // nums is an array of integers
    // return a new array that is a running sum of nums array
    // [1, 2, 3, 4] ==> [1, 3, 6, 10]
    // return a mapped version of original array

    return nums.map((el, i) => {
        for (k = i - 1; k >= 0; k--) {
            el += nums[k];
        }
        return el;
    })
};
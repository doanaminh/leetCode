var arithmeticTriplets = function(nums, diff) {
    // an array of numbers in increasing order and a positive integer
    // return number of unique triplets
    // nums = [0, 1, 4, 6, 7, 10], diff = 3    => 2
    
    let count = 0;
    for (i = 0; i < nums.length; i++) {
        for (j = 1; j < nums.length; j++) {
            for (k = 1; k < nums.length; k++) {
                if (i < j && j < k && nums[j] - nums[i] === diff && nums[k] - nums[j] === diff) {
                    count++;
                }
            }
        }
    }
    console.log(count);
    return count;
};
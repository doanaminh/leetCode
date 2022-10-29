var numIdenticalPairs = function(nums) {
    let count = 0;
    for (i = 0; i < nums.length; i++) {
        for (k = 1; k < nums.length; k++) {
            if (nums[i] === nums[k] && i < k) {
                count++;
            } 
        }
    }
    return count;
};
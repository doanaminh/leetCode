var containsNearbyDuplicate = function(nums, k) {
    for (i = 0; i < nums.length; i++) {
        for (j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j] && Math.abs(i - j) <= k) {return true}
            if (Math.abs(i - j) > k) {break}
        }
    }
    return false;
};
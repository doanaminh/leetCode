var divideArray = function(nums) {
    if (nums.length % 2 === 0) {
        nums.sort((a, b) => a - b);
        for (i = 0; i < nums.length; i++) {
            let x = nums[i];
            if (nums[i + 1] === x) {
                nums.shift();
                nums.shift();
                i--;
            }
        }
    }
    if (nums.length === 0) {
        return true;
    } else {
        return false;
    }
};
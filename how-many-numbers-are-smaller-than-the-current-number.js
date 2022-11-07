var smallerNumbersThanCurrent = function(nums) {
    return nums.map(element => {
        let count = 0;
        for (k = 0; k < nums.length; k ++) {
            if (element !== nums[k] && nums[k] < element) {
                count++;
            }
        }
        element = count;
        return element;
    });
};
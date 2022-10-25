var removeDuplicates = function(nums) {
    const count = {};
    for (i = 0; i < nums.length; i++) {
        if (count[nums[i]]) {
            nums.splice(i, 1);
            i--;
        } else {
            count[nums[i]] = 1;
        }
    }
    console.log(count, nums)
};
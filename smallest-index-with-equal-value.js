var smallestEqual = function(nums) {
    // nums is an array of integers ranging from 0 to 9 inclusive && nums.length is 1 to 100
    // return the minimum index of that satisfy the rules || -1 if no indices satisfy the rule
    // Input: nums = [4,3,2,1]  Output: 2
    // loop through the nums array 
    // apply the rules to the current element
    // the first element that satisfies the conditions will have its index returned

    for (i = 0; i < nums.length; i++) {
        if (i % 10 === nums[i]) return i;
    }
    return -1;
};
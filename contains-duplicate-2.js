/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // nums is an integer array
    // return true if there are duplicated integers in nums else return false
    // Input: nums = [1,2,3,1] Output: true
    // create a hashmap
    // iterate through nums
    // add each value to the hashmap
    // check if that value already exists in the hashmap
    // if it does return true
    // else add the value and continue
    // if the loop completes return false
    const map = {};
    for (i = 0; i < nums.length; i++) {
        if (map[nums[i]]) {
            return true;
        } else {
            map[nums[i]] = 1;
        }
    }
    return false;
};
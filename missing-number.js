/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // nums is an array of integers
    // n is length of nums
    // return the missing number
    // create a hashmap of 0 to n
    // loop through nums and cross out the matching numbers
    // return the only number that wasn't crossed out

    let map = {};
    for (i = 0; i <= nums.length; i++) {
        map[i] = i;
    }
    for (i = 0; i < nums.length; i++) {
        if (map[nums[i]] === map[nums[i]]) delete map[nums[i]]
    }
    return Object.keys(map)
};
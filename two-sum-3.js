/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // nums is an integer array and target is two numbers from nums that should add together to achieve
    // return the indices in an array of the two numbers in nums that sums up to target
    // Input: nums = [3,2,4], target = 6 Output: [1,2]
    // declare a hashmap 
    // loop through nums 
    // set a variable that holds the difference between target and the current value
    // if that value exists in the hashmap then return the indices of that number in the hashmap anad the current index of nums
    
    const map = {};
    for (i = 0; i < nums.length; i++) {
        const x = target - nums[i];
        if (Number.isInteger(map[x])) {
            return [map[x], i];
        } else {
            map[nums[i]] = i;
        }
    }
};
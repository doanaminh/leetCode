/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // nums is an integer array and target is number to add to reach
    // return the indices of the integers that will add up to target
    // assume that each nums array only includes ONE answer
    // Input: nums = [2,7,11,15], target = 9 Output: [0,1]
    // create a hashmap 
    // each iteration subtract the target from the current value
    // if that value exists in the hashmap then we have found our answer
    // return the indices of the numbers inside the hashmap in the form of an array
    // [2,7,11,15] => [2, 7] && the hashmap INCLUDES 2 || 9 - 7 = 2
    const map = [];
    for (i = 0; i < nums.length; i++) {
        let x = target - nums[i];
        if (map.includes(x)) {
            return [nums.indexOf(x), i];
        } else {
            map.push(nums[i]);
        }
    }
};
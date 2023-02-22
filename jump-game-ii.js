/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    // nums is an integer array
    // return true or false whether if it is possible to get to the last index of nums
    // each value in nums represents the maximum steps it can iterate through nums
    // nums[i] will always be positive
    // nums will never be empty
    // Input: nums = [3,2,1,0,4] Output: false
    // base case will be the position of the last element
    // declare a goal variable
    // loop through nums in reverse order 
    // update goal if the value of nums[i] is greater or equal to goal - i
    // goal will be updated to i
    // at the end of the loop goal will be 0 or greater
    // if the goal is 0 that means there is a way to reach the last element return true
    // else that means there is no way to reach the last element of nums starting from the first element return false
    let goal = nums.length - 1;
    for (i = nums.length - 2; i >= 0; i--) {
        if (nums[i] >= goal - i) {
            goal = i;
        }
    }
    if (goal === 0) return true;
    return false;
};
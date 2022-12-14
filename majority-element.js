// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:
// Input: nums = [3,2,3]
// Output: 3

// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

var majorityElement = function(nums) {
    const obj = nums.reduce((acc, cur) => {
        if (cur in acc) {
            acc[cur]++;
        } else {
            acc[cur] = 1;
        }
        return acc;
    }, {})
    return Object.keys(obj).reduce((acc, cur) => obj[acc] > obj[cur] ? acc : cur);
};
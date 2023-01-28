/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // nums is a sorted rotated array and target is the integer to search for
    // return the index of the target in nums
    // Input: nums = [4,5,6,7,0,1,2], target = 0  Output: 4
    // binary search
    // set left, mid, right pointers
    // check target with the pointers
    // move left or right pointer depending on which half target falls on
    // update the pointers
    // repeat until only one number is left
    // return the index (pointer value)
    
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right)/2);
        if (nums[mid] === target) {
            return mid;
        }

        if (nums[left] <= nums[mid]) {
            if (target < nums[left] || target > nums[mid]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        } else {
            if (target > nums[right] || target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }
    return -1;
};
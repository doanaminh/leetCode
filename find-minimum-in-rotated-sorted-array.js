/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    // nums is a sorted integer array that is rotated
    // return the minimum value of the array
    // Input: nums = [3,4,5,1,2] Output: 1
    // create an algo that will return the minimum value of the array in O(logn) time
    // binary search
    // create a min variable to hold the minimum value
    // create a left, middle, and right pointer
    // the left pointer will start at the first element
    // middle will be the middle element
    // right will be the last element
    // if left pointer is less than right pointer we can assume that the array is sorted without rotation
    // thus return the element the left pointer is on
    // else compare the middle pointer to the left and right
    // if the middle pointer is greater than the left pointer the middle pointer is within the greater half of the array
    // reroute the left pointer to m + 1
    // reroute middle pointer to the new middle between the left and right and repeat
    // if the middle pointer element is less than the left pointer that means the middle pointer is in the lesser half of the array 
    // reroute the right pointer to become m - 1
    // reroute the middle pointer to the new middle between the left and right pointers
    // repeat until we find the minimum element of the array
    // return the min

    let l = 0, m, r = nums.length - 1;
    let min = nums[0];
    while (l <= r) {
        m = Math.floor((l + r) / 2);
        if (nums[l] < nums[r]) {
            min = Math.min(min, nums[l]);
            break;
        }
        if (nums[l] === nums[r]) {
            min = Math.min(min, nums[l]);
            break;
        }
        if (nums[m] >= nums[l]) {
            l = m + 1;
        } else {
            r = m - 1;
        }
        min = Math.min(nums[l], nums[m], nums[r]);
    }
    return min;
};
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // height is an array of integers
    // return the max area that can be stored with the given heights
    // Input: height = [1,8,6,2,5,4,8,3,7] Output: 49
    // two pointers
    // define left pointer as first element
    // define right pointer as last element
    // define a max
    // calculate the area = (right - left) * Math.min(height[l], height[r])
    // update the max
    // update the pointer depending on which pointer is lower
    // loop through all the heights and return max

    let max = 0, l = 0, r = height.length - 1;
    while (l < r) {
        const area = (r - l) * Math.min(height[l], height[r]);
        max = Math.max(max, area);
        if (height[l] > height[r]) {
            r -=1;
        } else {
            l += 1;
        }
    }
    return max;
};
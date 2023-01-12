var sortedSquares = function(nums) {
    // nums is a non-decreasing ordered array of integers
    // return a new array of the squared values of nums in a non-decreasing order
    // Input: nums = [-4,-1,0,3,10]  Output: [0,1,9,16,100]
    // map nums and change each element into the squared version of itself
    // sort the new array from least to greatest
    // return the new array
     
    return nums.map(el => el**2).sort((a, b) => a - b);
};
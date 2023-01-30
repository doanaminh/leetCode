/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // nums is an array of integers
    // return an array of triplets that sum up to 0
    // cannot contain duplicate triplets
    // Input: nums = [-1,0,1,2,-1,-4] Output: [[-1,-1,2],[-1,0,1]]
    // sort nums in increasing order
    // let's loop through the nums array
    // for each iteration for the current element make sure it isn't the same as th element i - 1
    // now we can set up pointers and treat this part like two sum ii
    // check if any two remaining numbers can sum up with current element to equal 0
    // add those numbers to an array and push to res array
    // keep looping until all the combinations can be met

    let res = [];
    nums = nums.sort((a, b) => a - b);
    for (i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            continue;
        }
        let l = i + 1, r = nums.length - 1;
        while (l < r) {
            let threeSum = nums[i] + nums[l] + nums[r];
            if (threeSum > 0) {
                r -= 1;
            } else if (threeSum < 0) {
                l += 1;
            } else {
                res.push([nums[i], nums[l], nums[r]]);
                l += 1;
                while (nums[l] === nums[l - 1] && l < r) {
                    l += 1;
                }
            }
        }
    }
    return res;
};
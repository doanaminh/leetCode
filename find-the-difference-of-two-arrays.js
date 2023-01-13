var findDifference = function(nums1, nums2) {
    // nums are arrays of integers
    // return a new array of integers consisting of distinct integers from nums1 && nums2
    // Input: nums1 = [1,2,3], nums2 = [2,4,6]  Output: [[1,3],[4,6]]
    // simplify both nums1 && nums 2 into a distinct array
    // add those arrays to a new one 
    // return the new array

    let res = [];
    let temp1 = [];
    for (i = 0; i < nums1.length; i++) {
        if (!(nums2.includes(nums1[i]))) {
            temp1.push(nums1[i]);
        }
    }
    let temp2 = []
    for (i = 0; i < nums2.length; i++) {
        if (!(nums1.includes(nums2[i]))) {
            temp2.push(nums2[i]);
        }
    }
    res.push(temp1, temp2);
    return res.map(el => {
        return el.reduce((acc, cur) => {
            if (!(acc.includes(cur))) {
                acc.push(cur);
            }
            return acc;
        }, [])
    });
};
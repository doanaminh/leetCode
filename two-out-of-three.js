var twoOutOfThree = function(nums1, nums2, nums3) {
    // numsX are arrays that contain integers
    // return an array containing all numbers that are in at least 2/3 of the 3 nums array
    // Input: nums1 = [1,1,3,2], nums2 = [2,3], nums3 = [3]  ==>  Output: [3,2]
    
    let res = [];
    nums1.forEach(el => {
        if ((nums2.includes(el) || nums3.includes(el)) && !(res.includes(el))) res.push(el);
    })
    nums2.forEach(el => {
        if ((nums1.includes(el) || nums3.includes(el)) && !(res.includes(el))) res.push(el);
    })
    nums3.forEach(el => {
        if ((nums2.includes(el) || nums1.includes(el)) && !(res.includes(el))) res.push(el);
    })
    
    return res;
};
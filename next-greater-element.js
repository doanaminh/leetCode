var nextGreaterElement = function(nums1, nums2) {
    // nums1 is a subset of nums2 they are both arrays
    // nums arrays won't be empty
    // there won't be negative numbers inside nums array
    // every integer is unique in both nums arrays
    // nums1 integers will appear in nums2
    // return another array that consists of the next greater elements of nums1 to nums2
    // Input: nums1 = [4,1,2], nums2 = [1,3,4,2]  Output: [-1,3,-1]
    // create a res array
    // loop through nums1
    // find indexof each element
    // then loop through nums2 after that index
    // find a number that is greater than current element in nums1
    // if one is found then push that number to res array
    // if none is found then push -1 to the res array
    // return the res array

    return nums1.map((el, i) => {
        let x = nums2.indexOf(el);
        let dec = false;
        let temp = 0;
        for (j = x + 1; j < nums2.length; j++) {
            if (nums2[j] > el) {
                dec = true;
                temp = nums2[j];
                break;
            }
        }
        if (dec === true) {
            return temp;
        } else {
            return -1;
        }
    })
};
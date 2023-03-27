var topKFrequent = function(nums, k) {
    // nums is an integer array and k is an integer
    // k dictates how many elements you should return in order of most frequent
    // return an array of the most frequent elements
    // create an object to hold the element as the key and the amount it appears in nums as the value
    // sort the map
    // turn the object into an array sorted from most frequent to least

    const count = {};
    for (i = 0; i < nums.length; i++) {
        if (count[nums[i]]) {
            count[nums[i]]++;
        } else {
            count[nums[i]] = 1;
        }
    }
    let res = Object.keys(count);
    res = res.sort((a, b) => {
        return count[b] - count[a];
    })

    return res.splice(0, k);
};
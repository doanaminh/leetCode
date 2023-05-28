var topKFrequent = function(nums, k) {
    const count = {}
    for (i = 0; i < nums.length; i++) {
        if (nums[i] in count) {
            count[nums[i]]++;
        } else {
            count[nums[i]] = 1;
        }
    }
    let x = Object.keys(count).sort((a, b) => count[b] - count[a]);
    return x.slice(0, k);
};
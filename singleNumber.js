var singleNumber = function(nums) {
    const count = nums.reduce((acc, cur) => {
        if (cur in acc) {
            acc[cur]++;
        } else {
            acc[cur] = 1;
        }
        return acc;
    }, {});
    for (key in count) {
        if (count[key] === 1) return key;
    }
};
var summaryRanges = function(nums) {
    if (nums.length === 0) return [];
    let res = [];
    let temp = [];
    for (i = 0; i < nums.length; i++) {
        if (i === 0) {
            temp.push(nums[i]);
        } else if (nums[i - 1] === nums[i] - 1) {
            temp.push(nums[i]);
        } else {
            res.push(temp);
            temp = [];
            temp.push(nums[i]);
        }
    }
    res.push(temp);
    return res.map(item => item.length > 1 ? `${item[0]}->${item[item.length - 1]}` : `${item}`);
    console.log(res);
};
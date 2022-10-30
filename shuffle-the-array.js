var shuffle = function(nums, n) {
    let x = nums.slice(0, (nums.length / 2));
    let y = nums.slice((nums.length / 2));
    let res = [];
    for (i = 0; i < nums.length / 2; i++) {
        res.push(x[i], y[i]);
    }
    return res;
};
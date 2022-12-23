var countElements = function(nums) {
    let res = nums.sort((a, b) => a - b);
    let x = res.shift();
    let y = res.pop();
    for (i = 0; i < res.length; i++) {
        if (x === res[i]) {
            res.shift();
            i--;
        }
        if (y === res[i]) {
            res.pop();
            i--;
        }
    }
    return res.length;
};
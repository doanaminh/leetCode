var climbStairs = function(n) {
    let prev = 0;
    let cur = 1;
    let res = 0;
    for (i = 1; i <= n; i++) {
        res = prev + cur;
        prev = cur;
        cur = res;
    };
    console.log(res);
    return res;
};
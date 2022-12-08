var reverse = function(x) {
    let sign = true;
    if (x < 0) sign = false;
    x = Number(Math.abs(x).toString().split('').reverse().join(''));
    if (sign === false) {
        x = -Math.abs(x);
    }
    if (x > (-Math.abs(2**31)) && x < (2**31)) {
        return x;
    } else {
        return 0;
    }
};
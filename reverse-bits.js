/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let bin = n.toString(2);
    while (bin.length < 32) {
        bin = 0 + bin;
    }
    let res = '';
    for (i = 0; i < 32; i++) {
        if (bin[i] == 1) {
            res = 1 + res;
        } else {
            res = 0 + res;
        }
    }
    return parseInt(res, 2);
};
var countBits = function(n) {
    // n is an integer
    // return an array of the sum of the binary of i of the array
    // n = 2 => [0, 1, 1]  || n = 5 => [0, 1, 1, 2, 1, 2]
    // create an empty array
    // push an integer into the array depending on which iteration it is
    // return the array

    let arr = [];
    for (i = 0; i < n + 1; i++) {
        let res = '';
        let k = i;
        while (k > 0) {
            res = (k % 2).toString() + res;
            k = Math.floor(k / 2);
        }
        res = res.split('').reduce((acc, cur) => acc + +cur, 0)
        arr.push(res);
    }
    return arr;
};
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const arr = [];
    for (i = 0; i <= n; i++) {
        arr.push(i);
    }
    return arr.map(e => {
        let str = '';
        while (e != 0) {
            str = str + (e % 2);
            e = Math.floor(e / 2);
        }
        let count = 0;
        str = str.split('');
        str.forEach(el => {
            if (el === '1') count++
        });
        return count;
    });
};
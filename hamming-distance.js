var hammingDistance = function(x, y) {
    // x && y are integers 
    // return an integer representing the hamming distance between x && y
    // x = 1, y = 4  ==> 2
    // convert x and y to bit
    // turn the bit versions of x and y to arrays
    // loop through the arrays and check if each bit is the same at the same iteration
    // create a counter and count everytime the bit is different

    // to convert a number/integer to a binary
    // divide number by 2
    // take the remainder and add it to to a string
    // repeat this process until the number is 0
    // push every new remainder to the front of the string

    const toBin = n => {
        let res = '';
        while (n !== 0) {
            res = (n % 2) + res;
            n = Math.floor(n / 2);
        }
        return res;
    }
    const leadZero = (n, m) => {
        while (n.length !== m.length && n.length < m.length) {
            n.unshift('0');
        }
    }

    x = toBin(x).split('');
    y = toBin(y).split('');

    if  (x.length < y.length) {
        leadZero(x, y);
    } else {
        leadZero(y, x);
    }

    let count = 0;

    for (i = 0; i < x.length; i++) {
        if (x[i] !== y[i]) {
            count++;
        }
    }

    return count;
};
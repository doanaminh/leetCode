var mySqrt = function(x) {
    // positive integer
    // return square root of x rounded down
    // 4 => 2 || 8 => 2
    // using repeated subtraction method
    // set a count
    // use subtraction method to find square root
    // round down
    // return new number
    
    let count = 0;
    let i = 1;
    while (x >= i) {
        x -= i;
        count++;
        i += 2;
    }
    console.log(count);
    return count;
};
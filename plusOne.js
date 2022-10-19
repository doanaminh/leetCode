var plusOne = function(digits) {
    digits = BigInt(digits.join(''));
    digits++;
    digits = digits.toString()
        .split('')
        .map(item => +item);
    console.log(digits, typeof(digits));
    return digits;
};
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    // a && b are integers
    // return the sum of a && b without using the operators + and -
    // Input: a = 1, b = 2 Output: 3
    // bit manipulation ?
    // using operands ^, &, << 
    // if there are two bits that are 1
    // we can use a & b to make the output 1 and shift it over to the left using <<
    // a will add into b bitwise 
    // b will the new bit to add into a
    // until b is 0
    // the values will keep looping
    // return a when b is 0

    while (b != 0) {
        let temp = (a & b) << 1;
        a = a ^ b;
        b = temp;
    }
    return a;
};
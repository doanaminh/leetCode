var maximumValue = function(strs) {
    // strs is an array of strings and each string may or may not include both integers and alphabets but at least one of the two
    // return an integer that represents the value of the string with the max value
    // Input: strs = ["alic3","bob","3","4","00000"]  ==>  Output: 5
    // check if a string has alphabets in it
    // if it does the take the length of the str as the value
    // if it doesn't then take the the number of that string as the value
    // put these values into an object
    // loop through the object and look for the key with the highest value
    // return the highest value

    const abc = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let count = 0;

    // if (substrings.some(v => str.includes(v))) {
    // // There's at least one
// }

    let x = strs.reduce((acc, cur) => {
        cur = cur.split('');
        console.log(cur, cur.length);
        let x = null;
        cur.some(el => {
            if (!Number.isInteger(+el)){
                x = true;
            }
        })
        if (x) {
            acc[cur] = cur.join('').length;
        } else {
            acc[cur] = +cur.join('');
        }
        return acc;
    }, {})

    for (keys in x) {
        if  (x[keys] > count) {
            count = x[keys];
        }
    }

console.log(x);
    return count;
};
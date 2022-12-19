var mergeAlternately = function(word1, word2) {
    // two strings are given
    // return a new string as a combination of the two given strings in alternate order
    // word1 = 'abc', word2 = 'pqr'  => 'apbqcr'
    // break both strings into separate arrays
    // create a new array to hold the combined string
    // loop through both and if the array isn't empty add the first value of the array into a new one
    // turn the new array into a string and return it

    let arr1 = word1.split('');
    let arr2 = word2.split('');
    let res = [];

    while (arr1.length > 0 || arr2.length > 0) {
        if (arr1.length > 0) {
            res.push(arr1.shift());
        }
        if (arr2.length > 0) {
            res.push(arr2.shift());
        }
    }
    return res.join('');
};
var countPrefixes = function(words, s) {
    // words is an array of strings && s is a string
    // return the number of words that are a prefix to s
    // Input: words = ["a","b","c","ab","bc","abc"], s = "abc"  ==>  Output: 3
    // create a counter
    // loop through words
    // if a word is included in s 
    // increment the counter
    // return the counter

    let count = 0;
    words.forEach(el => {
        if (s.startsWith(el)) count++;
    })
    return count;
};
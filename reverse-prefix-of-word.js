var reversePrefix = function(word, ch) {
    // word is a string and ch is a letter in word string
    // return the word string with letters reversed up until and including ch
    // word = 'abcdefd', ch = 'd'  ==> 'dcbaefd'
    // turn word into an array
    // find the index of ch in word array
    // slice the word array from start to index of ch including ch
    // reverse that array
    // add that array with the remaining elements after the index of ch
    // return the resulting array

    let wordArr = word.split('');
    let x = wordArr.indexOf(ch) + 1;
    if (x - 1 === 0) {
        return word;
    } else {
        let res = wordArr.slice(0, x)
        .reverse()
        .concat(wordArr.slice(x))
        .join('');
        return res;
    }
    
};
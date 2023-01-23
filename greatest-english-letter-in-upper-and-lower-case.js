var greatestLetter = function(s) {
    // s is a string of both upper and lower English alphabet letters
    // return a string of uppercase letter that has both upper and lowercased versions in s that is the greatest alphabet
    // Input: s = "lEeTcOdE" Output: "E"
    // create abc array
    // define an empty array res
    // loop through s
    // if s[i] also have an uppercased version somewhere in s 
    // push s[i] to a new array
    // after finding all elements that have both upper and lowercased versions
    // loop through array that we created 
    // determine which element is the 'greatest'
    // we can check using the index of our abc array
    // return the 'greatest' element in uppercase form

    const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let res = new Set();
    for (i = 0; i < s.length; i++) {
        if (s.includes(s[i].toUpperCase()) && s.includes(s[i].toLowerCase())) {
            res.add(s[i].toUpperCase());
        }
    }
    let x = [...res];
    console.log(x);
    if (x.length > 1) {
        return x.reduce((a, b) => abc.indexOf(a) > abc.indexOf(b) ? a : b);
    } else if (x.length === 1){
        return x[0];
    } else {
        return '';
    }
    
};
var isIsomorphic = function(s, t) {
    // s and t are strings
    // return boolean 
    // s = 'egg', t = 'add'  ==> true
    // make s and t into separate arrays
    // loop through s and t arrays
    // count the letters in order
    
    let sArr = s.split('');
    let tArr = t.split('');
    const obj = {};
    sArr.forEach((el, i) => {
        if (!(el in obj)) {
            obj[el] = tArr[i];
        }
    })
    console.log(sArr, tArr, obj);
    for (key in obj) {
        for (letter in obj) {
            if (key !== letter && obj[key] === obj[letter]) return false;
        };
    };
    return sArr.every((el, i) => obj[el] === tArr[i]);
};
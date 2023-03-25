var isAnagram = function(s, t) {
    // s and t are strings
    // return true if the string t can be rearranged to form string s
    // Input: s = "anagram", t = "nagaram" Output: true
    // an anagram is defined by one word being able to transform into another word using each original letter once
    // if the length of s and t do not match then return false
    // count the letters of s and t then put the values into their respective objects
    // loop through the object and match the values
    // if any values don't match then return false
    // if the loop ends then return true

    if (s.length !== t.length) return false;

    const sObj = {}, tObj = {};
    for (i = 0; i < s.length; i++) {
        if (sObj[s[i]]) {
            sObj[s[i]]++;
        } else {
            sObj[s[i]] = 1;
        }
    }
    for (i = 0; i < t.length; i++) {
        if (tObj[t[i]]) {
            tObj[t[i]]++;
        } else {
            tObj[t[i]] = 1;
        }
    }
    for (letter in sObj) {
        if (sObj[letter] !== tObj[letter]) return false;
    }
    return true;
};
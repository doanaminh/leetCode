function groupAnagrams(strs: string[]): string[][] {
    // strs is an array of strings
    // return strings that are anagrams grouped together in its own arrays
    // Input: strs = ["eat","tea","tan","ate","nat","bat"] Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
    // create a constructor that will 
    // create an object to hold similar characters as a key and an array of the words as the value
    // loop through strs 
    // create a count array of length 26 and undefined elements
    // loop through each character of current element
    // reassign the count array at the index equal to the ascii value of the character subtracted by the ascii value of 'a'
    // this will create a 26 element ranged value
    // if this count array doesn't exist in the object
    // turn the count array into a tuple and map it as one of the keys of the object and append the current string to the value array
    // if it does then just append the string to that key
    // return the values of the object as an array

    // class DefaultObject {
    //     constructor(defaultInit) {
    //         return new Proxy({}, {
    //             get: (target, name) => name in target ? target[name] : (target[name] = typeof defaultInit === 'function' ? new defaultInit().valueOf() : defaultInit)
    //         })
    //     }
    // }
    // const res = new DefaultObject(Array);
    const res = {};

    for (let s of strs) {
        let count = Array(26).fill(0);
        for (let c = 0; c < s.length; c++) {
            count[s[c].charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        if (res[`${count}`]) {
            res[`${count}`].push(s);
        } else {
            res[`${count}`] = [s];
        }
    }
    return Object.values(res);
};
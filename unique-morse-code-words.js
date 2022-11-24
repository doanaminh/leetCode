var uniqueMorseRepresentations = function(words) {
    // make an object of the morse alphabet
    // return number of unique concatenations of morse code
    // words = ['gin', 'zen', 'gig', 'msg']   =>  2
    const abc = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    const morseAbc = abc.reduce((acc, cur, i) => {
        acc[cur] = morse[i];
        return acc;
    }, {})

    const arr = words.map(el => {
        let subWord = el.split('')
            .map(item => {
                item = morseAbc[item];
                return item;
            })
            .join('');
        return subWord;
    })
    
    const count = arr.reduce((acc, cur) => {
        if (!(acc.includes(cur))) {
            acc.push(cur);
        }
        return acc;
    }, []).length

    console.table(count);
    return count;
};
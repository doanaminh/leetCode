var countAsterisks = function(s) {
    // s === a string separated by |
    //  return number of * excluding the ones inside pairs
    // s = 'l|*e*et|c**o|*de|'  =>  2

    let count = 0;
    s.split('|')
        .map((el, i) => {
            if (i % 2 === 0) return el;
        })
        .forEach(el => {
            if (el) {
                let subStr = el.split('')
                    .forEach(s => {
                        if (s === '*') count++;
                    })
            }
    })

    console.log(s, count);
    return count;
};
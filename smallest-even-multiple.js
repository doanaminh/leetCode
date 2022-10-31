var smallestEvenMultiple = function(n) {
    for (i = 1; i < Infinity; i++) {
        if ((i % 2 === 0) && (i % n === 0)) return i;
    }
};
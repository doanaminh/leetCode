var numJewelsInStones = function(jewels, stones) {
    let key = jewels.split('');
    let puzzle = stones.split('');
    let count = 0;
    puzzle = puzzle.filter(item => {
        for (i = 0; i < key.length; i++) {
            if (item === key[i]) return true;
        }
    });
    return puzzle.length;
};
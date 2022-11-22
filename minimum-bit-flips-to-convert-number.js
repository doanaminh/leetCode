var minBitFlips = function(start, goal) {
    let binStart = '';
    while (start !== 0) {
        let temp = start % 2;
        start = Math.floor(start / 2);
        binStart = temp + binStart;
    }
    let binGoal = '';
    while (goal !== 0) {
        let temp = goal % 2;
        goal = Math.floor(goal / 2);
        binGoal = temp + binGoal;
    }
    binStart = binStart.split('');
    binGoal = binGoal.split('');

    while (binStart.length < binGoal.length) {
        binStart.unshift('0');
    }
    while (binStart.length > binGoal.length) {
        binGoal.unshift('0');
    }
    console.log(binStart, binGoal)

    let flips = 0;
    for (i = 0; i < binStart.length; i++) {
        if (binStart[i] !== binGoal[i])
        flips++;
    }

    return flips;
};
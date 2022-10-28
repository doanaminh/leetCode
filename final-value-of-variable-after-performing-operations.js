var finalValueAfterOperations = function(operations) {
    let x = 0;
    operations.forEach(item => item.includes('+') ? x++ : x--)
    return x;
};
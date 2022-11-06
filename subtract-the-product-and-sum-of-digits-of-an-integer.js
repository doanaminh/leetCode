var subtractProductAndSum = function(n) {
    let arrProd = n.toString()
        .split('')
        .reduce((acc, cur) => {
            acc *= +cur;
            return acc;
        }, 1)
    let arrSum = n.toString()
        .split('')
        .reduce((acc, cur) => {
            acc += +cur;
            return acc;
        }, 0);

    console.log(arrProd - arrSum);

    return arrProd - arrSum;
};
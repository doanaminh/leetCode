var generate = function(numRows) {
    let res = [[1]];
    if (numRows >= 2) res.push([1, 1]);
    let x = [1, 1];
    for (i = 3; i <= numRows; i++) {
        let temp = [];
        for (k = 0; k < i; k++) {
            if (k === 0) temp.push(1);
            else if (k === i - 1) temp.push(1);
            else temp.push(x[k - 1] + x[k]);
        }
        res.push(temp);
        x = temp;
    }
    return res;
};
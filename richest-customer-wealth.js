var maximumWealth = function(accounts) {
    let res = accounts.map(item => {
        item = item.reduce((acc, cur) => {
            acc += cur;
            return acc;
        }, 0);
        return item;
    })
    res.sort((a, b) => b - a);
    console.log(res);
    return res[0];
};
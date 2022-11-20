var restoreString = function(s, indices) {
    let arr = s.split('');
    const code = {};
    indices.forEach((el, i) => {
        code[el] = s[i];
    })
    let res = [];
    for (key in code) {
        res.push(code[key]);
    }
    return res.join('');
};
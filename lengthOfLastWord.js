var lengthOfLastWord = function(s) {
    let res = s.trim().split(' ');
    res = res[res.length - 1];
    return res.length;
};
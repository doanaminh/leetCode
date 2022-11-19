var sortSentence = function(s) {
    let arr = s.split(' ')
        .sort((a, b) => a[a.length - 1] - b[b.length - 1])
        .map(el => el.substring(0, el.length - 1))
        .join(' ');
    return arr;
};
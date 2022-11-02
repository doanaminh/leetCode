var mostWordsFound = function(sentences) {
    let res = sentences.map(item => item.split(' ').length)
        .sort((a,b) => b - a);
    return res[0];
};
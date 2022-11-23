var maximum69Number  = function(num) {
    num += '';
    let arr = num.split('');
    const ind = arr.indexOf('6');
    arr[ind] = '9';
    return Number(arr.join(''));
};
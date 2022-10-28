var defangIPaddr = function(address) {
    return address.split('')
        .map(item => item === '.' ? '[.]' : item)
        .join('');
};
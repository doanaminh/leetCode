var interpret = function(command) {
    let str = command.replaceAll('()', 'o')
        .replaceAll('(al)', 'al');
    return str;
};
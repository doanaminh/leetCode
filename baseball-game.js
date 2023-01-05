var calPoints = function(operations) {
    // operations === array of rules to be applied
    // return an integer equal to the total sum after rules are applied
    // ops = [5,2,C,D,+] => 30
    // create an empty array
    // loop through operations array
    // apply rules depending on what operation is being looped through
    // push integer into new array depending on what the rule was
    // find total sum of array

    let arr = [];
    operations = operations.map(el => {
        if (Number.isInteger(+el)) {
            el = +el;
        }
        return el;
    })
    operations.forEach((el) => {
        if (Number.isInteger(el)) {arr.push(el)}
        if (el === '+') {arr.push(arr[arr.length - 2] + arr[arr.length - 1])}
        if (el === 'D') {arr.push(arr[arr.length - 1] * 2)}
        if (el === 'C') {arr.pop()}
    })
    return arr.reduce((acc, cur) => acc + cur, 0);
};
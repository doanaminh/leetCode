var replaceElements = function(arr) {
    // arr is an array of positive integers
    // return a new array that replaces the elements with the greatest element to the right
    // Input: arr = [17,18,5,4,6,1] ==> Output: [18,6,6,6,1,-1]
    // loop through the arr
    // create a new array for each iteration from starting with the element right of current element
    // get the max number of the array
    // replace current element with the max number
    // continue doing this until the last element is reached which then replace that element with -1
    // return the new array

    return arr.map((el, i) => {
        if (i === arr.length - 1) {
            el = -1;
            return el;
        } else {
            let x = Math.max(...(arr.slice(i + 1)));
            el = x;
            return el;
        }
    });
};
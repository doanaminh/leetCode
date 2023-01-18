var countBalls = function(lowLimit, highLimit) {
    // lowLimit && highLimit are integers determining the range of the numbered balls that will be used (inclusive)
    // return an integer of the AMOUNT of balls that are in the box with the most balls
    // Input: lowLimit = 1, highLimit = 10  ==> Output: 2
    // we can create an object for numbers 1 - 9 for each box since only one integer boxes exist
    // loop through the ball range and add each ball one by one into the boxes
    // find the box with the highest amount of balls
    // return the number of balls inside that box

    const boxes = {};

    for (i = lowLimit; i <= highLimit; i++) {
        let x = i.toString().split('').reduce((acc, cur) => +acc + +cur, 0);
        if(x in boxes) {
            boxes[x]++;
        } else {
            boxes[x] = 1;
        }
    }
    return Math.max(...Object.values(boxes))

};
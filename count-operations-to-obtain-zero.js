var countOperations = function(num1, num2) {
    // we are given 2 non-negative numbers
    // return the an integer that signifies that number of operations required to make either num1 or num2 = 0
    // num1 = 2, num2 = 3 ==> 3    ||  num1 = 10, num2 = 10  ==> 1
    // create a counter variable to count the number of operations that has taken place
    // lets set up some if statements
    // if num1 > num2 ? num1 = num1 - num2
    // else num2 = num2 - num1
    // if either nums === 0 return counter

    let count = 0;
    while (num1 > 0 && num2 > 0) {
        if (num1 > num2) {
            num1 = num1 - num2;
        } else {
            num2 = num2 - num1;
        }
        count++;
    }
    return count;
};
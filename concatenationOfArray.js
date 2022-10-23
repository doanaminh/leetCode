var getConcatenation = function(nums) {
    // array of numbers where elements consists of integers 1 - 1000
    // return new array that is 2n of nums
    // [1, 2, 1] => [1, 2, 1, 1, 2, 1]
    // forEach the param array
    // push the current element to the same array
    // return the new array
    nums.forEach(item => nums.push(item));
    return nums;
};
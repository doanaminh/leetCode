var heightChecker = function(heights) {
    // heights is an array of integers
    // return number of differences of heights and sorted heights array
    // heights = [1, 1, 4, 2, 1, 3] ==> 3
    // make a sorted version of heights array
    // compare the two and count how many elements are different

    let sorted = heights.slice().sort((a, b) => a - b);
    let count = 0;
    for (i = 0; i < heights.length; i++) {
        if (heights[i] !== sorted[i]) {
            count++;
        }
    }
    return count;
};
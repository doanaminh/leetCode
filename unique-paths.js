/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    // m and n are integers for the width and length of the matrix
    // return an integer number of unique possible paths that the robot can get to the bottom right corner of the matrix
    // the robot starts at the top left corner
    // the robot can only move down or right
    // Input: m = 3, n = 7 Output: 28
    // so if either m or n is 1 then there should only be 1 way to traverse to the end for the robot
    // only one direction is available
    // so that will be the edge case 
    // for any area matrix the outer edge will only have 1 unique way for the robot to reach the end
    // so now to calculate the number of ways for each square we can simply add the value of the squares to the right of it and the bottom of it
    // create a matrix of m by n
    // fill all the squares of the matrix with 1
    // since the bottom and right perimeter of the matrix will always be 1 
    // start looping through the matrix starting at the 2nd to last squares of each perimeter
    // update the value of each square to the sum of the right and bottom square

    const dp = new Array(m);
    for (i = 0; i < m; i++) {
        dp[i] = new Array(n).fill(1);
    }
    for (i = m - 2; i >= 0; i--) {
        for (j = n - 2; j >= 0; j--) {
            dp[i][j] = dp[i + 1][j] + dp[i][j + 1];
        }
    }
    return dp[0][0];
};
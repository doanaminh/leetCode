/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    // text1 and text2 are strings of lowercased English characters
    // return the length of the longest common subsequence
    // Input: text1 = "abcde", text2 = "ace" Output: 3 
    // bottom up dynamic programming 
    // let's create a matrix of text1.length + 1 and text2.length + 1
    // starting from the last letters of each string we'll compare if they are the same characters 
    // if they are then add 1 to the amount with the bottom right diagonal of the matrix to the current element
    // if they don't match then then take the max of the the element below and to the right of the current element
    // working backwards the value at the very first square of the matrix will be the our answer
    // return that number

    let dp = Array(text1.length + 1)
    for (i = 0; i < text1.length + 1; i++) {
        dp[i] = Array(text2.length + 1).fill(0);
    }
    for (i = text1.length - 1; i >= 0; i--) {
        for (j = text2.length - 1; j >= 0; j--) {
            if (text1[i] === text2[j]) {
                dp[i][j] = dp[i + 1][j + 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j + 1]);
            }
        }
    }
    return dp[0][0];
};
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // n is the number of steps a stair has
    // return the number of ways to get to the last step being able to take 1 or 2 steps
    // Input: n = 3 Output: 3
    // bottom up dynamic programming
    // starting from the base case of the last step
    // we know on the last step we are done so there is 0 ways to move on
    // and from the second to last step we only have 1 way to reach the last step bc if we take 2 steps then we overshoot the last step
    // so our base cases are 0 and 1
    // if we continue to the third to last step if we take only one step then we end up with the possible ways of the second to last step which we know is 1
    // if we take two steps then we end up at the last step with the possible ways of 0
    // so the third to last step has the combined possiblities of the second to last and the last step
    // and each step after that has the combined possibilities of the two after it
    // knowing that we can calculate the possible ways from the first step starting from the last 2
    // so with base cases 0 and 1
    // update the base cases by adding each other
    // and setting the other one to the previous one
    // repeat until the first step is reached
    let x = 0, y = 1;
    for (i = 0; i < n; i++) {
        let temp = y;
        y += x;
        x = temp;
    }
    return y;
};
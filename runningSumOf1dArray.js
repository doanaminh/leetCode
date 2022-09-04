/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    
    let runSum = [];
    
    nums.reduce((acc, cur) => {
        acc = acc + cur;
        runSum.push(acc);
        return acc;
    }, 0);
        
    return runSum;
    
};
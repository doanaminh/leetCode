/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    // numbers is an array of integers and target is an integer
    // return the 1-indexed indices of the two elements that add up to target
    // Input: numbers = [2,7,11,15], target = 9 Output: [1,2]
    // lets use a sliding window
    // set left pointer to first element
    // right to last element
    // if left + right equal the target return an array of [left, right]
    // else if right element is greater than the target
    // move the right pointer closer to the middle
    // if the right element is not greater than the target
    // move the left pointer in
    // keep doing this until we find the elements that add up to the target 
    // once the conditions are satisfied return the indices

    let left = 0, right = numbers.length - 1;
    while (left < right) {
        if (numbers[left] + numbers[right] === target) {
            return [left + 1, right + 1];
        } else {
            if (numbers[right] + numbers[left] > target) {
                right -= 1;
            } else {
                left += 1;
            }
        }
    }
};
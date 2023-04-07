function topKFrequent(nums: number[], k: number): number[] {
    // nums is an integer array and k is an integer
    // return the k most frequent elements in nums
    // Input: nums = [1,1,1,2,2,3], k = 2 Output: [1,2]
    // create a map object
    // loop through nums
    // if current element is in map increment value by 1
    // else add current element as a kay and set value to 1
    // create a freq array with length equal to nums + 1 and fill it with default value of 0
    // map the keys of map to freq using the index as the value of map 
    // the element for the index will be an array of keys
    // create another res array 
    // loop through freq backwards 
    // loop through each array of freq
    // push the elements 
    // if the length of res is equal to k
    // return the array

    const map: {[key: number]: number} = {};
    for (let i of nums) {
        if (i in map) {
            map[i]++;
        } else {
            map[i] = 1;
        }
    }
    const freq: number[][] = new Array(nums.length + 1);
    for (let i = 0; i < freq.length; i++) {
        freq[i] = [];
    }
    for (let k in map) {
        freq[map[k]].push(Number(k));
    }
    const res: number[] = [];
    for (let i = freq.length - 1; i > -1; i--) {
        for (let j of freq[i]) {
            res.push(j);
            if (res.length === k) {
                return res;
            }
        }
    }
};
var decompressRLElist = function(nums) {
    let decList = [];
    nums.forEach((item, i) => {
        let temp = [];
        if (i % 2 === 0) {
            for (k = 0; k < item; k++) {
                temp.push(nums[i + 1])
            }
        }
        decList = decList.concat(temp);
    })
    console.log(decList);
    return decList;
};
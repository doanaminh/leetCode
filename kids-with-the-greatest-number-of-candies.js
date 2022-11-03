var kidsWithCandies = function(candies, extraCandies) {
    return candies.map(element => {
        if ((element + extraCandies) >= Math.max(...candies)) {
            element = true;
        } else {
            element = false;  
        }
        return element;
    })
};
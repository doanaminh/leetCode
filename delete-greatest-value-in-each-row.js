var deleteGreatestValue = function(grid) {
    // array of arrays of numbers
    // return max sum of deleted numbers
    // [[1,2,4],[3,3,1]] => 8
    // loop through grid array
    // for each array in grid remove the max number
    // add the removed number to an array
    // create a result variable to count the sum
    // create an array to hold deleted numbers
    // after comparing the deleted numbers add the higher one to the result sum variable
    // return the result variable

    let res = 0;
    
    while (grid[0].length > 0) {
        let arrHolder = [];
        grid.forEach(el => {
            arrHolder.push(el.sort((a, b) => a - b).pop());
        })
        res += arrHolder.sort((a, b) => b - a)[0];
    }
    return res;
};
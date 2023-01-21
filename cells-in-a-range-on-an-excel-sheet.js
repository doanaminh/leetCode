var cellsInRange = function(s) {
    // s is a string that consists of two cells
    // return an array of all cells that should be contained in the given area created by s
    // Input: s = "K1:L2"  Output: ["K1","K2","L1","L2"]
    // create an alphabet array
    // turn s into an array
    // split each element in s array to determine start and end points
    // create an empty array
    // for loop to push cells into empty array depending on start and end points of cells
    // return the new array

    const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let sArr = s.split(':');
    const start = sArr[0].split('');
    const end = sArr[1].split('');
    let res = [];
    let x = abc.indexOf(start[0]);
    let y = abc.indexOf(end[0]);

    for (i = x; i <= y; i++) {
        for (j = start[1]; j <= end[1]; j++) {
            res.push(`${abc[i] + j}`);
        }
    }
    return res;
};
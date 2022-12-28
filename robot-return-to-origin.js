const judgeCircle = function(moves) {
    // moves is a string of movements that the robot will perform
    // return boolean depending if robot ends at origin after the sequence of movements
    // moves = "UD" ==> true  ||  moves = "LL" ==> false
    // create a position array
    // turn moves into an array so we can iterate through it
    // forEach moves array
    // switch case UDLR
    // U => arr[1]++
    // D => arr[1]--
    // L => arr[0]--
    // R => arr[0]++
    // return true if arr[0] === 0 && arr[1] === 0
    // else return false

    let position = [0, 0];
    let moveArr = moves.split('');
    moveArr.forEach(el => {
        switch(el) {
            case 'L':
                position[0]--;
                break;
            case 'R': 
                position[0]++;
                break;
            case 'U':
                position[1]++;
                break;
            case 'D':
                position[1]--;
                break;
        }
    })
    if (position[0] === 0 && position[1] === 0) {
        return true;
    } else {
        return false;
    }
};
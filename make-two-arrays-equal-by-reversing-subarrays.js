var canBeEqual = function(target, arr) {
    // target && arr are arrays of integers
    // return Boolean if arr can match target exactly after flipping the order
    // Input: target = [1,2,3,4], arr = [2,4,1,3]  ==>  Output: true 
    // check if the lengths of target and arr equal
    // do they both contain same numbers and amount of numbers
    // return true if both checks pass otherwise return false
    
    const check = (a, b) => {
        if (a === b) return true;
        if (a.length !== b.length) return false;
        if (a == null || b == null) return false;
        a = a.slice().sort((a, b) => a - b);
        b = b.slice().sort((a, b) => a - b);

        for (i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) return false
        };
        return true;
    }

    let x = check(arr, target);

    if (x) return true;
    return false;
};
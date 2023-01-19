var kthDistinct = function(arr, k) {
    // arr is an array of strings && k is the index of distinct strings
    // return the kth distinct string element
    // Input: arr = ["d","b","c","b","c","a"], k = 2 ==>  Output: "a"
    // reduce arr into a simplified array with only distinct strings
    // return kth index element of new simplified string

    let x = arr.reduce((acc, cur) => {
        if (cur in acc) {
            acc[cur]++;
        } else {
            acc[cur] = 1;
        }
        return acc;
    }, {})

    let temp = [];
    for (key in x) {
        if (x[key] > 1) {
            temp.push(key);
        }
    }
    temp.forEach((el, i) => {
        while (arr.includes(el)) {
            for (i = 0; i < arr.length; i++) {
                if (arr[i] === el) {
                    arr.splice(i, 1);
                    i--;
                }
            }
        }
    })

    if (k > arr.length) {
        return '';
    } else {
        return arr[k - 1]
    }
};
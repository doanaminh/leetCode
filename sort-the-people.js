var sortPeople = function(names, heights) {
    let arr = [];
    for (i = 0; i < names.length; i++) {
        arr.push({name: names[i], height: heights[i]});
    }
    arr.sort((a, b) => b.height - a.height);
    console.log(arr);
    return arr.reduce((acc, cur) => {
        acc.push(cur.name);
        return acc;
    }, [])
    
};
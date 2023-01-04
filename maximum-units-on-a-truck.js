var maximumUnits = function(boxTypes, truckSize) {
    // boxTypes is an array of 2 element arrays containing integers representing the number of boxes and the units of each box && truckSize is the amount of boxes that can fit in the truck
    // return an integer representing the maximum units that can fit on the truck with box limits
    // boxTypes = [[1,3],[2,2],[3,1]], truckSize = 4  ==> 8
    // for each box that is used subtract the box number with the unit
    // subtract truckSize count for each box used until truckSize is 0
    // keep a tracker for how many units are on the truck
    let unitCount = 0;
    boxTypes.sort((a, b) => b[1] - a[1]);
    console.log(boxTypes);
    while (truckSize > 0 && boxTypes.length > 0) {
        if (boxTypes[0][0] > 0) {
            unitCount += boxTypes[0][1];
            boxTypes[0][0]--;
            truckSize--;
        } else {
            boxTypes.shift();
        }
    }
    return unitCount;
};
function mygcd(x,y){
    // x and y are integers
    // return the greatest common denominator of x and y
    // Input: (30, 12) Output: 6
    // Euclid's algorithm
    // for integers a and b
    // if a && b !== 0
    // a % b = r
    // q = (a - r)/b
    //as long as a or b is not zero keep breaking down the two integers like this
    // when one of the integers becomes 0 return the non zero one
    
    let a = Math.max(x, y), b = Math.min(x, y);
    while (a && b) {
      let r = a % b;
      a = b;
      b = r;
    }
    return Math.max(a, b);
  }
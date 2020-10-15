function factorialize(num) {
    var result = 1;
    // if(num === 1 || num === 0) {
    //     return result;
    // } else {
    //     return num * factorialize(num-1);
    // }

    for(var i=1; i<=num; i++) {
        result *= i;
    }

    return result;
        
}   

console.log(factorialize(4));
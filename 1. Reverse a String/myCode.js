function reverseString(str) {
    // var strArr = str.split("");
    // var strReverse = strArr.reverse();
    // var strJoin = strReverse.join("");
    // return strJoin;

    //return str.split("").reverse().join("");

    var reverse = "";
    for(var i = str.length - 1; i>=0; i--) {
        reverse += str[i];
    }
    return reverse;
}

console.log(reverseString("hello"));

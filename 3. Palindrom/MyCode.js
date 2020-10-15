function palindrom(str) {
    var reg = /[\w_]/g;
    var smallStr = str.toLowerCase().replace(reg, "");
    var reverse = smallStr.split("").reverse().join("");
    
    if (smallStr === reverse) {
        return console.log("This is Palindrom");
    } else {
        return console.log("This is not palindrom");
    }
}

palindrom("eye");
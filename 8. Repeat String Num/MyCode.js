// function repeatSringNumTimes(str,num) {
//     if (num < 0) return "";
//     return str.repeat(num);
// }

// function repeatSringNumTimes(str,num) {
//     var repeat="";
//     if (num < 0) return "";
//     for (var i=0; i<num; i++){
//         repeat += str;
//     }
//     return repeat;
// }

function repeatSringNumTimes(str,num) {
    if (num < 0) return "";
    if (num === 1) return str;

    return str + repeatSringNumTimes(str, num-1);
}


console.log(repeatSringNumTimes("edho", 21));
// function largestOfFour(arr) {
//     var maxArray = [];
//     for (var i=0; i<arr.length; i++) {
//         var tempArr = arr[i][0];
//         for(var j=0; j<arr[i].length; j++) {
//             var highArr = arr[i][j];
//             if (highArr >= tempArr) {
//                 tempArr = highArr;
//             }
//         }

//         maxArray.push(tempArr);
//     }

//     return maxArray;
// }

// function largestOfFour(arr) {
//     var maxArray = [0, 0, 0, 0];
//     for (var i=0; i<arr.length; i++) {
//         for(var j=0; j<arr[i].length; j++) {
//             var highArr = arr[i][j];
//             if (highArr >= maxArray[i]) {
//                 maxArray[i] = highArr;
//             }
//         }
//     }
//     return maxArray;
// }

function findMax(arr) {
    var max = arr[0];
    for (var i=0; i<arr.length; i++) {
        if (arr[i] > max) max = arr[i];
    }
    return max;
}

function largestOfFour(arr) {
    var maxArray = [];
    for (var i=0; i<arr.length; i++) {
        var fristMaxArray = findMax(arr[i]);
        maxArray.push(fristMaxArray);
    }
    return maxArray;
}

console.log(largestOfFour([[4, 5, 1, 4], [1, 41, 2, 6], [222, 444, 61, 22], [72, 24, 51, 21]]));
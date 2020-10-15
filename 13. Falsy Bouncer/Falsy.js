// function falsyBouncer(arr) {
//     var result = [];
//     for (var elm of arr) {
//         if (elm)result.push(elm);
//     }

//      return result;
// }

function falsyBouncer(arr) {
    return arr.filter(function(elm){
        return elm;
    });
}

console.log(falsyBouncer([7, "ate", "", false, 9]));
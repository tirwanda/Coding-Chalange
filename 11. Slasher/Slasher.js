function slasher(arr, x) {
    arr.splice(0, x);
    return arr;
}

console.log(slasher([1, 2, 3], 1));
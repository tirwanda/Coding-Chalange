function chunkyMonky(arr, size) {
    var group = [];
    // while (arr.length > 0) {
    //      group.push(arr.slice(0, size));
    //      arr = arr.slice(size);
    // }

    while (arr.length > 0) {
        group.push(arr.splice(0, size));
    }

    return group;

}

console.log(chunkyMonky(["a", "b", 'c', 'd'], 3));
function confirmEnding(str, target) {
    // if (str.endsWith(target)){
    //     return console.log("true");
    // } else {
    //     console.log("false");
    // }

    if (str.substr(-target.length) === target) {
        console.log("true");
    } else {
        console.log("flase");
    }

    //return str.slice(-target.length) === target;
}

confirmEnding("Edhoo", "o");
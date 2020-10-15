function titleCase(str) {
    // var word = str.toLowerCase().split(" ");

    // for(var i=0; i<word.length; i++){
    //     word[i] = word[i][0].toUpperCase() + word[i].slice(1);
    // }

    // return word.join(" ");

    var words = str.toLowerCase().split(" ").map(function(elm){
        return elm[0].toUpperCase() + elm.slice(1);
    });

    return words.join(" ");
}
console.log(titleCase("I will become to full stack developer"));
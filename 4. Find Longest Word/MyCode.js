function findLongestWord(str) {
    var words = str.split(" ");
    var lastWord = "";

    // for (var i=0; i<=words.length; i++){
    //     if(words.length > lastWord.length) {
    //         lastWord = words[i];
    //     }
    // }

    return str.split(" ").sort(function (a, b){return b.length - a.length})[0];
    // for (var word of words){
    //     if (word.length > lastWord.length) lastWord = word;
    // }
    // return lastWord;
}


console.log(findLongestWord("aku berkerja di astra honda motor"));
function RNATranscription(dna){
    var trans = {G:"C", C:"G",T:"A",A:"U"};
    return trans[dna];
}
console.log(RNATranscription("G"));
console.log(RNATranscription("C"));
console.log(RNATranscription("T"));
console.log(RNATranscription("A"));
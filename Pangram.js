function Pandgram(str){
    var arr = str.split('');
    arr.sort();
    //console.log(arr);
    var i = 0;
    if (arr[arr.length-1] == 'z'){
        while(i<arr.length-1 && 
            (arr[i]==' ' || arr[i].charCodeAt(0)==arr[i+1].charCodeAt(0)
        || arr[i].charCodeAt(0)+1 == arr[i+1].charCodeAt(0)))
            i++;
        if (i>=arr.length-1) return true;
        else return false;
    }
    else return false;
}
var str = "the quick brown fox jumps over the lazy dog";
console.log("Pangram: " + str + " - " + Pandgram(str));
str = "ahe quick brown fox jumps over the lazy dog";
console.log("Pangram: " + str + " - " + Pandgram(str));
str = "The zuick brown fox jumps over the lazy dog";
console.log("Pangram: " + str + " - " + Pandgram(str));
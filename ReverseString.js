function ReverseString(str){
    var outstr = "";
    for (var i=str.length-1;i>=0;i--){
        outstr = outstr + str[i];
    }
    return outstr;
}
console.log(ReverseString("Cool"));
function longestConsec(strarr, k) {
    var longest = "";
    for(var i=0;k>0 && i<=strarr.length-k;i++){
        var tempStr = strarr.slice(i,i+k).join("");
        if(tempStr.length > longest.length){
            longest = tempStr;
        }
    }
    return longest;
}
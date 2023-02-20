/*
['ninja', 'samurai', 'ronin'] --> "ninja, samurai and ronin"
['ninja', '', 'ronin'] --> "ninja and ronin"
[] -->""
 */
function formatWords(words){
    if (!words) return ''
    words=words.filter(v=>v.length>0)
    if (words.length===0) return ''
    if (words.length===1) return words[0]
    return words.slice(0,-1).join(', ')+' and '+words.slice(-1)
}
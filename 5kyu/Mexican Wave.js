//wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

const MexicanWave = (str) => {
    const newArr=[]
    for (let i = 0; i < str.length; i++) {
        if(str[i]&&str[i]>"A"){
        newArr.push(str.slice(0,i)+str[i].toUpperCase()+str.slice(i+1,))}
    }
    return newArr
}
console.log(MexicanWave("hel lo"))
console.log(MexicanWave(""))
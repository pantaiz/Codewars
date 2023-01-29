function zipObject(keys = [], values = []) {
    let  obj={}
if (keys!==0){
    keys.forEach((value, index, array) => {
        if (Array.isArray(value) && value.length>1){
            obj[value[0]]=value[1]
        }else {
            obj[keys[index]]=values.length>0?values[index]:undefined;
        }
    })
    return obj;
}
return obj;
}
console.log(zipObject(['fred', 'barney'], [30, 40]))
//=> { 'fred': 30, 'barney': 40 }
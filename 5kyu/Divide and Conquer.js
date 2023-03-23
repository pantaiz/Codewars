function divCon(x){
    let a=0
    for (let i = 0; i < x.length; i++) {
        if (typeof x[i]=='number'){
            a+=x[i]
        }else(
            a+=-x[i]
        )

    }
    return a
}

console.log(divCon([9, 3,3, '7', '3']))
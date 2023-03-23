function divCon(x){
    return x.reduce((acc,a)=>typeof x=="number"?acc+a:typeof x=="string"?acc+Number(a):acc,0)
}

console.log(divCon([9, 3,3, '7', '3']))
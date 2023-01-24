function nthFibo(n) {
    let [a,b]=[0,1]
    for (i = 1; i <n ; i++) {[a,b]=[b,a+b]
    }
    return a
}

    /*
    let sum=0;
    let arr=[0,1];
    let a=0;
    let b=1;

    while (n>2){
        sum=a+b
        a=b
        b=sum
        arr.push(sum)
        n--
    }
    return arr.pop()
}*/
//сумма двух числе 0 1 1 2 3 5 8
console.log(nthFibo(1))
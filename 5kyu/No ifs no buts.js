function noIfsNoButs(a,b){
    switch (Math.sign(a-b)) {
        case 1: return `${a} is greater than ${b}`;
        case -1:return `${a} is smaller than ${b}`;
        case 0: return `${a} is equal to ${b}`;
    }
}
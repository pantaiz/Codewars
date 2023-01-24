export function nthFibo(n: number): number {

    let [a,b]=[0,1]
    for (let i:number = 1; i <n ; i++) {[a,b]=[b,a+b]
    }
    return a
}


const Gasket = (n) => {
let print=[]
    let rowsLenght=1
    let rows=2**n
    let simbol=""
    for (let i = 0; i <rows ; i++) {

       for (let j = 0; j <rowsLenght ; j++) {
           simbol+="L"

        }
        rowsLenght++

        print.push(simbol)

    }
    return print
}

console.log(Gasket(2))
function transpose(matrix) {
const transMatris=[];
let promarr=[];
for (let i = 0; i < matrix[0].length; i++) {
    for (let j = 0; j < matrix.length; j++) {
        promarr.push(matrix[j][i])
    }
    transMatris.push(promarr);
    promarr=[];
}
return transMatris;
}
console.log(transpose([[1]]));


//   newArr.lenght=arr[i].length
//   newArr[i].length=arr.lenght
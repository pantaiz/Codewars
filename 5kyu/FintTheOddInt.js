function findOdd(arr){
    for (let i = 0; i <arr.length ; i++) {
        let count=0
        for (let j = 0; j <arr.length ; j++) {
            if (arr[i]==arr[j]){
                count++
            }
        }
        if (count%2==1){
            return arr[i]
        }
    }}
console.log(FintTheOddInt([1,2,2,3,3,3,3,4,3,3,2,2,1]));

/*Учитывая массив целых чисел, найдите то, которое встречается
нечетное число раз.Всегда будет только одно целое число,
которое появляется нечетное число раз.*/
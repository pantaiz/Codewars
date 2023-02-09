function landPerimeter (arr) {

    for (let i = 0; i <arr.length ; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i][j]==='X'){
                let sum=1
                if (j-1>=0 && arr[i][j-1]==="X"){
                    sum++
                }
                if (j+1>=arr.length && arr[i][j+1]==="X"){
                    sum++
                }
                if (i-1>=0 && arr[i-1][j]==="X"){
                    sum++
                }
                if (i+1>=arr.length && arr[i+1][j]==="X"){
                    sum++
                }

                console.log(arr[i][j])
            }

        }
    }
    return sum
}
console.log(landPerimeter(['XOOXO',
    'XOOXO',
    'OOOXO',
    'XXOXO',
    'OXOOO'] ))
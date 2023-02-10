function landPerimeter (arr) {
    let sum=0
    for (let i = 0; i <arr.length ; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j]==='X'){
                sum+=4
                if (j-1>=0 && arr[i][j-1]==="X"){
                    sum--
                }
                if (j+1<arr[i].length && arr[i][j+1]==="X"){
                    sum--
                }
                if (i-1>=0 && arr[i-1][j]==="X"){
                    sum--
                }
                if (i+1<arr.length && arr[i+1][j]==="X"){
                    sum--
                }
            }

        }
    }
    return`Total land perimeter: ${sum}`
}
console.log(landPerimeter([
    "XXX",
    "OOX",
    "OOO",
    "XXX",
    "OXO"] ))
function cakes(recipe, available) {
    let cakes=[];
   for (i in recipe){
       if (available[i]>0){
           cakes.push(Math.floor(available[i]/recipe[i]))
       }else {
           return 0}
   }
    return cakes.sort((a, b) =>a - b)[0]
}


console.log(cakes( {flour: 500, sugar: 200, eggs: 1},{flour: 1200, sugar: 1200, eggs: 5, milk: 200}))



// must return 2
//cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});
// must return 0
//cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});
const idealSquare=str=>str.split("\n").length==str.split("\n").filter(item=>item.split('').filter(value => value=='.').length==str.split("\n").length).length;


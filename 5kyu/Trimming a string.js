function trim(str, size) {
    if (size>=str.length) {
          return str }
      else  if(str.length<=3){
         return str.substr(0,size)+"..."
      }  
    else if (str.length>=3 && size<=3) {
        return str.substr(0,size)+"..."
        
      }
    else{
          return str.substr(0,size-3)+"..." 
      }
  }
console.log(trim("dHZK APnoP",1));
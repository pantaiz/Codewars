function calculate1RM(w, r) {
    let rm=[];
    if (r<=1){
        if (r==0){
            return 0
        }
        return w
    }
    rm.push(Math.round(w*(1+r/30)),Math.round((100*w)/(101.3-2.67123*r)),Math.round(w*r**0.1))
    return  rm.sort((a,b)=>a-b).pop()
}
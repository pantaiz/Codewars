const divCon=(x)=>x.reduce((acc,a)=>typeof a==="number"?acc+a:acc-Number(a),0)

const add = (a,b) => {
    a = [...a].reverse()
    b = [...b].reverse()

    for (var q=0; q<b.length; ++q) {
        if ((a[q] = ~~a[q] + ~~b[q]) > 9) {
            a[q] -= 10
            b[q+1] = ~~b[q+1] + 1
        }
    }

    return a.reverse().join("")
}


console.log(add("638", "90"))
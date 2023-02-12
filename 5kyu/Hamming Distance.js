const hamming = (a, b) => {
    let counter = 0
    for (let i = 0; i < a.length; i++) {
        a[i] !== b[i] && counter++
    }
    return counter
}


console.log(hamming("tles", "keys"))
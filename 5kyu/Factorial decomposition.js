function decomp(a) {
    const factors = []
    for (; a > 1; a--) {
        n = a
        ;
        let divisor = 2;
        while (n >= 2) {

            if (n % divisor == 0) {
                factors.push(divisor);
                n = n / divisor;
            } else {
                divisor++;
            }
        }
    }
    let counter = 1;
    let outputString = "";
    factors.sort((a, b) => a - b)
    for (let i = 1; i < factors.length; i++) {
        if (factors[i] === factors[i - 1]) {
            counter++
            if (factors[i] != factors[i + 1]) {
                outputString += factors[i] + '^' + counter + ' * '
                counter = 0;
            }
        } else {
            if (factors[i] == factors[i + 1]) {
                counter++
            } else {
                outputString += factors[i] + " * "
            }
        }
    }
    return outputString.slice(0, -3);
}
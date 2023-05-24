function expandedForm(num) {
    const numStr = num.toString();
    let result = '';

    for (let i = 0; i < numStr.length; i++) {
        if (numStr[i] === '0') continue;

        const digit = parseInt(numStr[i]);
        const place = numStr.length - i - 1;
        result += digit * Math.pow(10, place) + ' + ';
    }

    result = result.slice(0, -3);
    return result;
}
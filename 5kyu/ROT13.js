function rot13(a) {
    return a.split('').map((value, index) => {
            if (value.charCodeAt(0) >= 'A'.charCodeAt(0) && value.charCodeAt(0) <= 'Z'.charCodeAt(0)) {
                if (value.charCodeAt(0) + 13 > 'Z'.charCodeAt(0)) {
                    return String.fromCharCode('A'.charCodeAt(0) - ('Z'.charCodeAt(0) - value.charCodeAt(0) - 12))
                }
                return String.fromCharCode(value.charCodeAt(0) + 13)
            }

            if (value.charCodeAt(0) >= 'a'.charCodeAt(0) && value.charCodeAt(0) <= 'z'.charCodeAt(0)) {
                if (value.charCodeAt(0) + 13 > 'z'.charCodeAt(0)) {
                    return String.fromCharCode('a'.charCodeAt(0) - ('z'.charCodeAt(0) - value.charCodeAt(0) - 12))
                }
                return String.fromCharCode(value.charCodeAt(0) + 13)
            }
            return value
        }
    ).join('')}

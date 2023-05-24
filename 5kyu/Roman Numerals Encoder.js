function solution(roman) {
    // Создаем массив символов и значений
    const romanNumerals = {
        'M': 1000,
        'CM': 900,
        'D': 500,
        'CD': 400,
        'C': 100,
        'XC': 90,
        'L': 50,
        'XL': 40,
        'X': 10,
        'sX': 9,
        's': 5,
        'sV': 4,
        's' :1,
    }

    let number = 0; // Пустой результат
    for (let i = 0; i < roman.length; i++) {
        roman[i]
    }
    // Проходим по массиву символов и значений
    for (let i = 0; i < romanNumerals.length; i++) {
        // Пока значение больше или равно текущему значению, добавляем символ к результату
        while (number >= romanNumerals[i].value) {
            roman += romanNumerals[i].symbol;
            number -= romanNumerals[i].value;
        }
    }

    return roman; // Возвращаем результат
}
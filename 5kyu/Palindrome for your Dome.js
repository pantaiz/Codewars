const palindrome = (string) => string.toLowerCase().replace(/[^0-9a-z]/g,'').split('').reverse().join('')==string.toLowerCase().replace(/[^0-9a-z]/g,'')
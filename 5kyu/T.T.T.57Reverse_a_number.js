const reverseNumber = (str) =>  {
    let stack = [];
    let startIdx = 0;
    let maxLength = 0;

    for(let i = 0; i < str.length; i++) {
        if(str[i] === '(') {
            stack.push(i);
        } else if(str[i] === ')') {
            if(stack.length === 0) {
                startIdx = i + 1;
            } else {
                stack.pop();
                maxLength = Math.max(maxLength, i - (stack.length === 0 ? startIdx - 1 : stack[stack.length - 1]));
            }
        }
    }

    return maxLength;
}*/
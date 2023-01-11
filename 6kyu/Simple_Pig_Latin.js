/* Move the first letter of each word
 to the end of it, then add "ay" to the 
 end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
https://www.codewars.com/kata/520b9d2ad5c005041100000f */

//это на данный момент саммая длинная моя функция 12.01.23
function pigIt(str) {
    return str.split(' ').reduce((a, item,) => {item=item.split('');if (item.join().charCodeAt(0) >= 65) {item.push(item.shift(), "a", "y");return a + " " + item.join('')} return a + " " + item.join('') }, "").slice(1,)
};





//Рабочее решение
/* function pigIt(str) {
    arr=str.split(' ').map(a=>a.split(''))
    let a=[];
    return arr.reduce((accumulator,item,index,array)=>
    {if(item.join().charCodeAt(0)>=65) 
        {item.push(item.shift(),"a","y");
        return accumulator+" "+item.join('')}
    else{
        return accumulator+" "+item.join('')}}           ,"").slice(1,)}; */
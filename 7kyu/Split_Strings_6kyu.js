/* Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
https://www.codewars.com/kata/515de9ae9dcfc28eb6000001Ф */

function solution(str){
    str.length%2!=0?str=str+'_':str;
    strArray=str.split('');
   let completArray=[];
     console.log( strArray);
     for (let i = 0; i < strArray.length; i=i+2) {
      completArray.push(strArray[i]+strArray[i+1])
     }
     return completArray;
  }
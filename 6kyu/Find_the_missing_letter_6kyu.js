/* Find the missing letter
Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
(Use the English alphabet with 26 letters!)

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata!
https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript */

function findMissingLetter(array)
{
  let index=0;
  if (array[0]!=array[0].toLowerCase()) {
    index=1;
    array=array.map(item => item.toLowerCase());
  }  
  let arrayRight=to_a(array[0],array[array.length - 1]);
  let answer=arrayRight.filter(arr1Item => !array.includes(arr1Item));
  if (index!=1) {
    return answer[0];
  } else {
    return answer[0].toUpperCase();
  }
}

function to_a(c1, c2) {
    a = 'abcdefghijklmnopqrstuvwxyz'.split('');
    return a.slice(a.indexOf(c1), a.indexOf(c2) + 1);
}
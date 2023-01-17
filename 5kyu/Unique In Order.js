/* Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript
 */

var uniqueInOrder=function(iterable){
    var newArr=[];
    var lastarr=[];
if (iterable.constructor == Array) {
    newArr=iterable
}else{
    newArr=iterable.split('')
}
newArr.map((value,i,array)=>{value!=array[i+1]?  lastarr.push(value):1;})
return lastarr
  
}
/* You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.
https://www.codewars.com/kata/5266876b8f4bf2da9b000362/javascript
 */
function likes(names) {
    var result;
   if(names.length==0){
     result="no one likes this";
     return result;
   }else if (names.length==1) {
     result=names[0]+' likes this';
     return result;
   }else if (names.length==2) {
     result=names[0]+' and '+names[1]+' like this';
     return result;
   }else if (names.length==3) {
     result=names[0]+', '+names[1]+' and '+names[2]+' like this';
     return result;
   }else{
     othersLike=names.length-2;
     result=names[0]+', '+names[1]+' and '+othersLike+' others like this';
     return result;
   }
}
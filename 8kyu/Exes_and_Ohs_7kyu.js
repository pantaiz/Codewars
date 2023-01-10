/* Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false */


function XO(str) {
    let counterX=0;
    let counterO=0;
    str=str.toLowerCase()
    let targetX='x';
    let targetO='o';
    let pos = -1;
  
    while ((pos = str.indexOf(targetX, pos + 1)) != -1) {
      counterX++;
      
  }
    while ((pos = str.indexOf(targetO, pos + 1)) != -1) {
  
      counterO++; 
  }
  return counterO===counterX;
}
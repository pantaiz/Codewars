/* There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

Find the unique number (this kata)
Find the unique string
Find The Unique
https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript */


function findUniq(arr) {
    let repeated = arr.filter((item, index) => arr.indexOf(item) !== index)
    return arr.filter((item)=> item !== repeated[0])[0]
}
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));
console.log(findUniq([ 1, 1, 1, 22,]));
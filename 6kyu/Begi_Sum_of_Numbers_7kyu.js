/* Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
Your function should only return a number, not the explanation about how you get that number.
https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript */

function getSum(a, b){
    let sum=0
    a>b? [a,b]=[b,a]: 1;
   for (let i = a; i <= b; i++) {
   sum+=i;
   }
   return sum;
}
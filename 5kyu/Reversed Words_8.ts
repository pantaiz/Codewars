/* Complete the solution so that it reverses all of the words within the string passed in.

Words are separated by exactly one space and there are no leading or trailing spaces.

Example(Input --> Output):
https://www.codewars.com/kata/51c8991dee245d7ddf00000e/train/typescript */


export function reverseWords(s: string): string {

    return s.split("").reverse().join("")
   }
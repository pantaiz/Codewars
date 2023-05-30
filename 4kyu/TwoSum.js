// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).
//
//     For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.
//
//     The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).
//
// Based on: http://oj.leetcode.com/problems/two-sum/
//
//     twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]


const twoSum = (arrNumbers, sumNumber) => {
    const result = []
    for (let i = 0; i < arrNumbers.length-1; i++) {
        for (let j = i+1; j <arrNumbers.length ; j++) {
            if((arrNumbers[i]+arrNumbers[j])===sumNumber){
                result.push(i,j)
                break
            }
        }
        if (result.length===2){
            break
        }
    }
    return result
}
console.log(twoSum( [-681, -842, -391, -120, 505, 847, -144, 834, -969, -823, -608, 236, -354, -999, 192, 387, -696, 183, -791, 196, 540, 149, -108, 416, -892, 594, -436, 28, 43, -100, 989, 452, -664, 461, -131, -532, 92, 507, -626, 303, 292, 258, 343, 666, -146, -31, 824, -529, 814, -514, 899, 967, 249, -549, -966, 607, -294, -946, 546, -720, 106, -358, 714, 334, 833, -384, 908, -988, 400, -84, 510, -48, 179, 591], 385))
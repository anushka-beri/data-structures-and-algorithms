// Given an integer n, return true if it is a power of two. Otherwise, return false. An integer n is a power of two, if there exists an integer x such that n == 2x.

const num = 16

// brute force approach
// var isPowerOfTwo = function (n) {
//     let multiRes = 1;
//     for (let i = 0; i <= n; i++) {
//         multiRes = Math.pow(2, i)
//         if (multiRes === n) {
//             return true
//         } else if (multiRes > n) {
//             return false
//         }
//     }
//     if (multiRes !== n) {
//         return false
//     }
// };


// using recursion
function isPowerOfTwo(num) {
    return num == 1 ? true : (num < 1 ? false : isPowerOfTwo(num / 2));
}


console.log(isPowerOfTwo(15));
// //Generate fibonacci series up to n terms

const n = 5;

function calFibonacciSequence(num) {
    if (num < 2) {
        return 1;
    } else {
        return calFibonacciSequence(num - 1) + calFibonacciSequence(num - 2);
    }
}

console.log(calFibonacciSequence(n));

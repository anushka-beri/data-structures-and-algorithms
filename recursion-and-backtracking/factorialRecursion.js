//Calculate fictorial of a positive integer

const n = 5;

function findFactorial(n) {
    if (n === 0 || n === 1) {
        return 1
    } else {
        console.log(n)
        return (n * findFactorial(n - 1))
    }
}

//run code and check stack
//returns 120

findFactorial(n);
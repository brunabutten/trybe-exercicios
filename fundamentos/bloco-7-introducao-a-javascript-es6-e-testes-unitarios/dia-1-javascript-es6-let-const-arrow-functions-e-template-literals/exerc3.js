const factorial1 = number1 => {
    let result = 1;

    for (let index = 2; index <= number1; index += 1) {
        result *= index;
    }

    return result;
}

console.log(factorial1(5));

const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(5));
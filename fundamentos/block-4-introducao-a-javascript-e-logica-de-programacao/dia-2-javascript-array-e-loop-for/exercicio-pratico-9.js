let numbers = [];
let resultado = [];

for (let index = 1; index <= 25; index += 1) {
    numbers.push(index);
  }

for (let index = 0; index <= numbers.length; index += 1) {
    resultado = (numbers[index] / 2);
    console.log(resultado);
    // console.log(numbers[index] / 2);
};

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
soma = 0;

for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
}

let average = soma / numbers.length;
    if (average > 20) {
    console.log("valor maior que 20");
    }
    else {
        console.log("Valor menor ou igual a 20");
    }


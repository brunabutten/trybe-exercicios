// Dados de uma pessoa:

let pessoa = {
    nome: 'Fabio',
    idade: 35,
    altura: 1.77,
    possuiHabilitacao: true,
    bandasFavoritas: ['Iron Maiden', 'Nighttwish', 'Baroes da pisadinha'],
    endereco: {
        rua: 'Rua do Fabio',
        numero: 19,
        cidade: 'Niterói',
        estado: 'Rio de Janeiro',
    },
    turma: '19C',
};

console.log(pessoa.endereco.estado);

// Bracket notation:

let key = 'nome';
console.log(pessoa[key]);

// let altura = pessoa.altura;
// delete pessoa.altura;
// console.log(pessoa.altura);

// For in:

for (let key in pessoa) {
    console.log(key, pessoa[key]);
}

console.log(typeof[]);

// Greetings:

function printGreetings() {
    console.log('Hello World!');
}

printGreetings();

// Sum:

function sum(value1, value2) {
    return value1 + value2;
}

console.log(sum(10, 15));

//  Max:

function max(value1, value2) {
    if (value1 > value2) {
        return value1;
    } else {
        return value2;
    }
}

console.log(max(10, 15));

// Average:

function average(value1, value2, value3) {
    return (value1 + value2 + value3) / 3;
}

let result = average(10, 20, 30);
console.log(result);


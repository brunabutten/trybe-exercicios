// Mega sena aula passada:
// Gerar um numero inteiro aleatório entre 1 e 60:

function generateNumber() {
    let randomNumber = Math.floor(Math.random() * 60) +1;
    return randomNumber;
}

// Sortear seis números da mega sena:

function generateGame() {
    let game = [];
    for (let count = 0; count < 6; count += 1) {
        game.push(generateNumber());
    }
    return game;
}

// let megasena = generateGame();

// Verificar número de acertos:

let megasena = generateGame();

let gabriel = [7, 17, 34, 42, 48, 55];
let henrique = [3, 19, 38, 42, 43, 56];
let resultGabriel = compare(gabriel, megasena);
let resultHenrique = compare(henrique, megasena);
let resultSurpresinha = compare(surpresinha, megasena);

console.log("Números sorteados: ", megasena);

console.log("Jogo Gabriel: ", gabriel, megasena);
console.log("Jogo Henrique: ", henrique, megasena);
console.log("Jogo Surpresinha: ", surpresinha, resultSurpresinha);

function compare(game, megasena) {
    let count = 0;
for (let indexMegaSena = 0; indexMegaSena < megasena.length; indexMegaSena += 1) {
            for (let index = 0; index < game.length; index += 1) {
            if (megasena[indexMegaSena] === game[index]) {
               count += 1;
            }
        }
    }
    return count;
}

let countGabriel = 0;



// let countGabriel = 0;
// for (let indexMegaSena = 0; indexMegaSena < megasena.length; indexMegaSena += 1) {
//         console.log('Mega sena: ', megasena[indexMegaSena]);
//         for (let indexGabriel = 0; indexGabriel < game.length; indexGabriel += 1) {
//             if (megasena[indexMegaSena] === game[indexGabriel]) {
//                 console.log("Acertou!");
//                 countJogo += 1;
//             }
//         }
//     }
//     console.log(countJogo);

 

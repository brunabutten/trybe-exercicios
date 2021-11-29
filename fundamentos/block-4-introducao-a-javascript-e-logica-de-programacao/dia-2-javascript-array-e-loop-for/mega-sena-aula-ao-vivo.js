
let firstNumber = Math.floor(Math.random() * 60) + 1;
let secondNumber = Math.floor(Math.random() * 60) + 1;
let thirdNumber = Math.floor(Math.random() * 60) + 1;
let fourtNumber = Math.floor(Math.random() * 60) + 1;
let fifthNumber = Math.floor(Math.random() * 60) + 1;
let sixthNumber = Math.floor(Math.random() * 60) + 1;

let megasena = [ firstNumber, secondNumber, thirdNumber, fourtNumber, fifthNumber, sixthNumber];
let gabriel = [7, 12, 32, 48, 52, 58];

let countHits = 0;

for (let indexMegaSena = 0; indexMegaSena < megasena.length; indexMegaSena += 1) {
    console.log('Mega sena: ', megasena[indexMegaSena]);

    for (let indexGabriel = 0; indexGabriel < gabriel.length; indexGabriel +=1) {
        console.log('Gabriel: ', gabriel[indexGabriel]);

        if (megasena[indexMegaSena] === gabriel[indexGabriel]) {
            console.log("Acertou!");
            countHits += 1;

        }
    }
}
console.log(countHits);

